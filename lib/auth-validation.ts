export const USERNAME_MIN = 3;
export const USERNAME_MAX = 64;
export const PASSWORD_MAX = 128;

/** Chữ, số, `.` `_` `-` (phổ biến cho username hệ thống). */
const USERNAME_RE = /^[a-zA-Z0-9._-]+$/;

export type UsernameMessages = {
  tooShort: string;
  tooLong: string;
  invalid: string;
};

export type PasswordMessages = {
  tooShort: string;
  tooLong: string;
  weak: string;
};

export function validateUsername(raw: string, m: UsernameMessages): string | null {
  const s = raw.trim();
  if (s.length < USERNAME_MIN) return m.tooShort;
  if (s.length > USERNAME_MAX) return m.tooLong;
  if (!USERNAME_RE.test(s)) return m.invalid;
  return null;
}

/** Chỉ cần có ít nhất một ký tự (sau trim); không bắt độ dài tối thiểu hay phải có chữ + số. */
export function validatePassword(raw: string, m: PasswordMessages): string | null {
  if (raw.length > PASSWORD_MAX) return m.tooLong;
  if (raw.trim().length < 1) return m.tooShort;
  return null;
}

export function validateFullName(raw: string, emptyMessage: string): string | null {
  if (raw.trim().length < 1) return emptyMessage;
  return null;
}

export function validateEmail(raw: string, invalid: string): string | null {
  const s = raw.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) return invalid;
  return null;
}

/** Ít nhất 8 chữ số (bỏ khoảng trắng, dấu phân cách). */
export function validatePhone(raw: string, invalid: string): string | null {
  const digits = raw.replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 15) return invalid;
  return null;
}
