/**
 * Thứ tự section theo DOM trên trang chủ — dùng scroll spy + đồng bộ hash URL.
 * `#san-pham` là block gallery trên `/`; trang danh mục sản phẩm là route `/san-pham` (khác nhau: fragment vs pathname).
 */
export const HOME_SCROLL_SECTION_IDS: readonly string[] = [
  'trang-chu',
  'dich-vu',
  'giai-phap',
  'tai-sao',
  'san-pham',
  'tin-tuc',
  'tam-nhin',
  'lien-he',
];
