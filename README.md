# Gregorian to Jalali Date Converter

This repository contains a JavaScript (TBEL-compatible) script to convert a Gregorian date in ISO format (e.g., `2024-10-20T08:55:47`) to the equivalent Jalali (Shamsi) date and time.

## Features:
- Convert any ISO-formatted Gregorian date string to a Jalali date.
- Supports conversion of time in `AM/PM` format.
- Handles invalid date formats gracefully.


---
![image](https://github.com/user-attachments/assets/8f116d2d-85b2-4b20-8c52-0b046d81624f)
the result is :
![image](https://github.com/user-attachments/assets/a5aa69b2-ec1a-4bd8-9851-6919f2e44672)


# مبدل تاریخ میلادی به جلالی

این مخزن شامل یک اسکریپت جاوااسکریپت (سازگار با TBEL) برای تبدیل تاریخ میلادی در قالب ISO (مثلاً `2024-10-20T08:55:47`) به معادل تاریخ جلالی (شمسی) و زمان آن می‌باشد.

## ویژگی‌ها:
- تبدیل هر تاریخ میلادی به جلالی با فرمت ISO.
- پشتیبانی از تبدیل زمان به فرمت `AM/PM`.
- برخورد مناسب با تاریخ‌های نامعتبر.

---

## English Section:

### Usage:

1. **Input:** Pass a valid ISO date string, e.g., `"2024-10-20T08:55:47"`.
2. **Output:** The script will return the equivalent Jalali date and time in the format `YYYY/MM/DD HH:MM:SS AM/PM`.

Example:
```javascript
var value = "2024-10-20T08:55:47";
```
Output:
```
1403/07/29 08:55:47 AM
```

### Functions:
- `gregorianToJalali(year, month, day)`: Converts the Gregorian date to a Jalali date.
- `padZero(num)`: Adds leading zeros to single-digit numbers.
- `formatTime(hours, minutes, seconds)`: Converts time to 12-hour `AM/PM` format.

### Prerequisites:
- JavaScript/Node.js environment.
- TBEL compatibility for ThingsBoard if used in a ThingsBoard Rule Engine.

---

## بخش فارسی:

### نحوه استفاده:

1. **ورودی:** یک رشته تاریخ معتبر در قالب ISO وارد کنید، مثلاً `"2024-10-20T08:55:47"`.
2. **خروجی:** اسکریپت معادل تاریخ جلالی و زمان آن را در فرمت `YYYY/MM/DD HH:MM:SS AM/PM` برمی‌گرداند.

مثال:
```javascript
var value = "2024-10-20T08:55:47";
```
خروجی:
```
1403/07/29 08:55:47 AM
```

### توابع:
- `gregorianToJalali(year, month, day)`: تاریخ میلادی را به جلالی تبدیل می‌کند.
- `padZero(num)`: اعداد یک‌رقمی را با صفر در ابتدا پر می‌کند.
- `formatTime(hours, minutes, seconds)`: زمان را به فرمت ۱۲ ساعته `AM/PM` تبدیل می‌کند.

### پیش‌نیازها:
- محیط جاوااسکریپت/Node.js.
- سازگاری با TBEL برای ThingsBoard در صورت استفاده در Rule Engine.

---

