'use client';

import { useMemo, useState } from 'react';
import { ChevronDown, Minus, Plus } from 'lucide-react';
import { pricingSolutions, type PricingItem } from '@/data/pricing-solutions';
import Container from '@/components/ui/container';

type Quantities = Record<string, number>;

const currencyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

function discountFor(item: PricingItem, quantity: number) {
  if (quantity <= 0) return null;

  const matched = (item.discounts ?? []).filter(
    (rule) => quantity >= rule.minQty && (rule.maxQty == null || quantity <= rule.maxQty),
  );
  if (matched.length === 0) return null;

  return matched.reduce((best, rule) => (rule.percent > best.percent ? rule : best), matched[0]);
}

function discountedUnitPrice(item: PricingItem, quantity: number) {
  const discount = discountFor(item, quantity);
  if (!discount) return item.price;
  return Math.round(item.price * (1 - discount.percent / 100));
}

export default function SolutionPriceCalculatorSection() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set([pricingSolutions[0]?.id].filter(Boolean)));
  const [quantities, setQuantities] = useState<Quantities>({});

  const total = useMemo(
    () =>
      pricingSolutions.reduce(
        (sum, solution) =>
          sum +
          solution.items.reduce((itemSum, item) => {
            const quantity = quantities[item.id] ?? 0;
            return itemSum + quantity * discountedUnitPrice(item, quantity);
          }, 0),
        0,
      ),
    [quantities],
  );

  const updateQuantity = (itemId: string, nextQuantity: number) => {
    setQuantities((current) => ({ ...current, [itemId]: Math.max(0, Math.floor(nextQuantity || 0)) }));
  };

  const setQuantity = (itemId: string, value: string) => {
    updateQuantity(itemId, Number(value) || 0);
  };

  const toggleSolution = (solutionId: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(solutionId)) {
        next.delete(solutionId);
      } else {
        next.add(solutionId);
      }
      return next;
    });
  };

  return (
    <section id="bao-gia" className="relative bg-[#eef7ff] py-12 text-slate-900 sm:py-16">
      <Container>
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-sky-100 bg-white/95 px-4 py-4 shadow-[0_18px_45px_rgba(14,116,144,0.12)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-600">Bảng giá IoT</p>
            <h2 className="mt-1 text-xl font-black uppercase tracking-[0.08em] text-sky-950 sm:text-2xl">
              Báo giá giải pháp
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Chọn số lượng sản phẩm trong từng giải pháp để tính giá sau chiết khấu.
            </p>
          </div>
          <div className="shrink-0 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-500 to-blue-600 px-5 py-4 text-right text-white shadow-[0_16px_32px_rgba(37,99,235,0.22)]">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-50/80">Đơn giá tổng</p>
            <p className="mt-1 text-2xl font-black tabular-nums drop-shadow-sm">{formatCurrency(total)}</p>
          </div>
        </div>

        <div className="space-y-3">
          {pricingSolutions.map((solution) => {
            const isOpen = openIds.has(solution.id);
            const solutionTotal = solution.items.reduce((sum, item) => {
              const quantity = quantities[item.id] ?? 0;
              return sum + quantity * discountedUnitPrice(item, quantity);
            }, 0);

            return (
              <div
                key={solution.id}
                className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-[0_10px_28px_rgba(14,116,144,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => toggleSolution(solution.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-sky-50/70 sm:px-5"
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-black uppercase tracking-[0.08em] text-sky-950">
                      {solution.name}
                    </span>
                    <span className="mt-1 block text-xs text-sky-700/70">
                      {solution.items.length} sản phẩm · Tạm tính {formatCurrency(solutionTotal)}
                    </span>
                  </span>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t border-slate-100">
                    <div className="hidden grid-cols-[minmax(0,1fr)_120px_150px_190px] gap-4 bg-sky-50 px-5 py-2 text-xs font-bold uppercase tracking-wider text-sky-700/70 md:grid">
                      <span>Sản phẩm</span>
                      <span>Đơn vị</span>
                      <span>Số lượng</span>
                      <span className="text-right">Đơn giá</span>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {solution.items.map((item) => {
                        const quantity = quantities[item.id] ?? 0;
                        const discount = discountFor(item, quantity);
                        const unitPrice = discountedUnitPrice(item, quantity);
                        const hasDiscount = discount != null;

                        return (
                          <div
                            key={item.id}
                            className="grid gap-3 px-4 py-4 md:grid-cols-[minmax(0,1fr)_120px_150px_190px] md:items-center md:gap-4 md:px-5"
                          >
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                                {item.discounts?.length ? (
                                  <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-bold text-sky-700 ring-1 ring-sky-100">
                                    Có chiết khấu
                                  </span>
                                ) : null}
                              </div>
                              {item.model ? <p className="mt-1 text-xs text-slate-500">Model: {item.model}</p> : null}
                              {item.discounts?.length ? (
                                <p className="mt-1 text-xs text-slate-400">
                                  {item.discounts.map((rule) => rule.label).join(' · ')}
                                </p>
                              ) : null}
                            </div>

                            <p className="text-xs font-medium text-slate-500 md:text-sm">{item.unit || '-'}</p>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, quantity - 1)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-700 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                                disabled={quantity <= 0}
                                aria-label={`Giảm số lượng ${item.name}`}
                              >
                                <Minus className="h-4 w-4" aria-hidden />
                              </button>
                              <input
                                type="number"
                                min="0"
                                step="1"
                                value={quantity}
                                onChange={(event) => setQuantity(item.id, event.target.value)}
                                className="h-10 w-16 rounded-full border border-sky-100 bg-sky-50 px-2 text-center text-sm font-bold tabular-nums text-sky-950 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-400/20"
                                aria-label={`Số lượng ${item.name}`}
                              />
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, quantity + 1)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow-[0_8px_18px_rgba(14,165,233,0.28)] transition hover:bg-sky-600 active:scale-95"
                                aria-label={`Tăng số lượng ${item.name}`}
                              >
                                <Plus className="h-4 w-4" aria-hidden />
                              </button>
                            </div>

                            <div className="text-left md:text-right">
                              <div className="flex items-center gap-2 md:justify-end">
                                {hasDiscount ? (
                                  <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[11px] font-black text-white">
                                    -{discount.percent}%
                                  </span>
                                ) : null}
                                <p className="text-sm font-bold tabular-nums text-slate-950">
                                  {formatCurrency(unitPrice)}
                                </p>
                              </div>
                              {hasDiscount ? (
                                <p className="mt-1 text-xs tabular-nums text-slate-400 line-through">
                                  {formatCurrency(item.price)}
                                </p>
                              ) : null}
                              {quantity > 0 ? (
                                <p className="mt-1 text-xs font-semibold tabular-nums text-sky-700">
                                  Thành tiền: {formatCurrency(quantity * unitPrice)}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
