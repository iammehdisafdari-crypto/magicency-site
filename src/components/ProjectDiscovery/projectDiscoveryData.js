export const PROJECT_DISCOVERY_DATA = {
  en: {
      eyebrow: '01 / 08',
      title: 'START A PROJECT',
      steps: {
        step1: {
          id: 'about',
          number: '01',
          title: 'ABOUT YOU',
          fields: {
            name: 'Full Name',
            company: 'Company',
            role: 'Role',
            email: 'Work Email'
          }
        },
        step2: {
          id: 'challenge',
          number: '02',
          title: 'THE CHALLENGE',
          options: [
            { id: 'grow', label: 'GROW FASTER', desc: 'Acquisition velocity & scaling' },
            { id: 'reposition', label: 'REPOSITION', desc: 'Brand narrative & market clarity' },
            { id: 'build', label: 'BUILD NEW', desc: 'Web applications & products' },
            { id: 'fix', label: 'FIX ISSUES', desc: 'Conversion recovery & audits' }
          ]
        },
        step3: {
          id: 'needs',
          number: '03',
          title: 'WHAT YOU NEED',
          options: [
            'Strategy & Growth',
            'Performance & Creative',
            'Technology, AI & Automation',
            'Not sure, need a diagnostic audit'
          ]
        },
        step4: {
          id: 'timeline',
          number: '04',
          title: 'TIMELINE',
          options: [
            'As soon as possible',
            'Within 1-2 months',
            'Within 3-6 months',
            'Just exploring options'
          ]
        },
        step5: {
          id: 'investment',
          number: '05',
          title: 'INVESTMENT',
          options: [
            'Under $5k',
            '$5k - $10k',
            '$10k - $25k',
            '$25k+'
          ]
        },
        step6: {
          id: 'brief',
          number: '06',
          title: 'PROJECT BRIEF',
          placeholder: 'Tell us a bit more about what you are trying to achieve...'
        },
        step7: {
          id: 'review',
          number: '07',
          title: 'REVIEW',
          summaryTitle: 'Your inputs',
          submitBtn: 'SUBMIT BRIEF'
        },
        step8: {
          id: 'sent',
          number: '08',
          title: 'SENT',
          successTitle: 'Brief Received.',
          successMessage: 'Our strategic team will review your context and reach out shortly.'
        }
      },
      controls: {
        next: 'NEXT',
        prev: 'PREV',
        close: 'CLOSE'
      }
    },
  fa: {
      eyebrow: '۰۱ / ۰۸',
      title: 'شروع پروژه',
      steps: {
        step1: {
          id: 'about',
          number: '۰۱',
          title: 'درباره شما',
          fields: {
            name: 'نام و نام خانوادگی',
            company: 'نام شرکت',
            role: 'سمت شغلی',
            email: 'ایمیل کاری'
          }
        },
        step2: {
          id: 'challenge',
          number: '۰۲',
          title: 'چالش اصلی',
          options: [
            { id: 'grow', label: 'رشد سریع‌تر', desc: 'شتاب‌دهی به جذب مشتری و مقیاس‌پذیری' },
            { id: 'reposition', label: 'تغییر جایگاه', desc: 'بازطراحی هویت برند و شفافیت پیام' },
            { id: 'build', label: 'ساخت محصول جدید', desc: 'توسعه وب‌سایت، اپلیکیشن و محصول دیجیتال' },
            { id: 'fix', label: 'رفع مشکلات فعلی', desc: 'عارضه‌یابی و بهبود نرخ تبدیل' }
          ]
        },
        step3: {
          id: 'needs',
          number: '۰۳',
          title: 'نیاز شما',
          options: [
            'استراتژی و رشد',
            'پرفورمنس مارکتینگ و تولید محتوا',
            'تکنولوژی، هوش مصنوعی و اتوماسیون',
            'مطمئن نیستم، نیاز به بررسی دارم'
          ]
        },
        step4: {
          id: 'timeline',
          number: '۰۴',
          title: 'زمان‌بندی',
          options: [
            'در سریع‌ترین زمان ممکن',
            'طی ۱ تا ۲ ماه آینده',
            'طی ۳ تا ۶ ماه آینده',
            'فقط در حال بررسی هستم'
          ]
        },
        step5: {
          id: 'investment',
          number: '۰۵',
          title: 'بودجه تقریبی',
          options: [
            'کمتر از ۵۰ میلیون تومان',
            '۵۰ تا ۲۰۰ میلیون تومان',
            '۲۰۰ تا ۵۰۰ میلیون تومان',
            'بیشتر از ۵۰۰ میلیون تومان'
          ]
        },
        step6: {
          id: 'brief',
          number: '۰۶',
          title: 'خلاصه پروژه',
          placeholder: 'کمی بیشتر در مورد هدفی که می‌خواهید به آن برسید بنویسید...'
        },
        step7: {
          id: 'review',
          number: '۰۷',
          title: 'مروری بر اطلاعات',
          summaryTitle: 'اطلاعات وارد شده',
          submitBtn: 'ارسال درخواست'
        },
        step8: {
          id: 'sent',
          number: '۰۸',
          title: 'ارسال شد',
          successTitle: 'درخواست شما ثبت شد.',
          successMessage: 'تیم استراتژی ما درخواست شما را بررسی کرده و به زودی با شما تماس خواهد گرفت.'
        }
      },
      controls: {
        next: 'مرحله بعد',
        prev: 'مرحله قبل',
        close: 'بستن'
      }
    }
};
