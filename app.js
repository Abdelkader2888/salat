const STORAGE_KEY = "masjid-beautiful-dashboard-v1";
const NOTIFICATION_KEY = "masjid-beautiful-dashboard-last-notification";
const PRAYER_ORDER = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
const THEMES = ["desert", "emerald", "midnight"];

const DEFAULT_STATE = {
  locale: "ar",
  theme: "desert",
  mosqueName: "مسجد الحي",
  method: 4,
  alertsEnabled: true,
  reminderMinutes: 3,
  notificationsEnabled: false,
  location: {
    lat: 24.7136,
    lon: 46.6753,
    label: "الرياض، السعودية",
  },
  geoSelection: {
    countryIso: "SA",
    stateName: "Riyadh",
    cityName: "Riyadh",
  },
  iqamaOffsets: {
    Fajr: 20,
    Dhuhr: 15,
    Asr: 15,
    Maghrib: 10,
    Isha: 20,
  },
};

const TRANSLATIONS = {
  ar: {
    pageTitle: "لوحة المسجد",
    settings: "الإعدادات",
    controlCenter: "مركز التحكم",
    appearance: "المظهر",
    appearanceText: "غيّر اللغة والثيم وتفاصيل العرض من هذه اللوحة الجانبية.",
    themeDesert: "رملي هادئ",
    themeDesertText: "ألوان دافئة للمساجد التقليدية",
    themeEmerald: "زمردي",
    themeEmeraldText: "أجواء خضراء أنيقة ومريحة",
    themeMidnight: "ليلي فاخر",
    themeMidnightText: "لوحة داكنة مناسبة للشاشات الكبيرة",
    cycleTheme: "تغيير التنسيق",
    mosqueInfo: "بيانات المسجد",
    mosqueInfoText: "اضبط الاسم وطريقة الحساب ثم اختر البلد والمنطقة والمدينة.",
    mosqueName: "اسم المسجد",
    mosqueNamePlaceholder: "مثال: مسجد النور",
    calcMethod: "طريقة حساب الصلاة",
    country: "البلد",
    stateRegion: "الولاية / المنطقة",
    city: "المدينة",
    chooseCountry: "اختر البلد",
    chooseState: "اختر الولاية أو المنطقة",
    chooseCity: "اختر المدينة",
    noStates: "لا توجد ولايات مسجلة، سيُستخدم موقع البلد",
    noCities: "لا توجد مدن مسجلة، سيُستخدم موقع الولاية",
    applyGeoSelection: "اعتماد الاختيار الجغرافي",
    useMyLocation: "استخدم موقعي",
    iqamaOffsets: "فروقات الإقامة",
    iqamaOffsetsText: "أدخل عدد الدقائق بين الأذان والإقامة لكل صلاة.",
    silentAlerts: "تنبيهات صامتة",
    silentAlertsText:
      "قبل الصلاة بدقيقتين أو ثلاث تظهر رسالة هادئة تطلب إغلاق الهاتف والسكينة.",
    enableSilentAlerts: "تفعيل التنبيهات الصامتة",
    alertLeadTime: "وقت التنبيه قبل الصلاة",
    browserNotifications: "إشعارات المتصفح",
    requestPermission: "طلب الإذن",
    saveAndRefresh: "حفظ الإعدادات",
    heroEyebrow: "واجهة هادئة للمصلين",
    heroTitle: "لوحة مسجد جميلة ومريحة تعرض الصلاة التالية وآداب المسجد بوضوح",
    heroText:
      "تم تصميم هذه الواجهة لتكون مناسبة لشاشة المسجد أو الموقع الرسمي، مع زخارف إسلامية خفيفة وثيمات متعددة وتنبيهات صامتة قبل الصلاة.",
    chip1: "تنبيهات قبل الصلاة",
    chip2: "تبديل لغة وثيم",
    chip3: "قائمة إعدادات جانبية",
    mosque: "المسجد",
    location: "الموقع",
    currentTime: "الوقت الحالي",
    gregorianDate: "التاريخ الميلادي",
    hijriDate: "التاريخ الهجري",
    timezone: "المنطقة الزمنية",
    nextPrayer: "الصلاة التالية",
    nextIqama: "الإقامة التالية",
    etiquette: "آداب المسجد",
    etiquetteTitle: "السكينة وإغلاق الهاتف",
    etiquetteText:
      "يرجى خفض الصوت وإغلاق الهاتف والمحافظة على هدوء المسجد انتظارًا للصلاة.",
    prayerBoardEyebrow: "لوحة اليوم",
    prayerBoardTitle: "أوقات الصلاة والإقامة",
    prayerBoardText:
      "تعرض البطاقات وقت الأذان ووقت الإقامة مع حالة كل صلاة خلال اليوم.",
    dailyReminder: "تذكير يومي",
    dailyReminderTitle: "كلمات طيبة للمصلين",
    dailyReminderText: "بطاقات قصيرة مناسبة للعرض داخل المسجد قبل الإقامة.",
    importantDays: "مناسبات",
    importantDaysTitle: "أيام مهمة في التقويم الهجري",
    importantDaysText: "قد تختلف بعض المناسبات بحسب الرؤية المحلية المعتمدة.",
    mosqueMap: "خريطة المسجد",
    mosqueMapTitle: "الموقع المعتمد حاليًا",
    mosqueMapText: "يمكنك أيضًا تثبيت نقطة المسجد يدويًا من الخريطة.",
    locationCardEyebrow: "الموقع الحالي",
    coordinates: "الإحداثيات",
    footnote:
      "ملاحظة: الأوقات والتاريخ الهجري حسابية وقد تختلف يومًا بحسب الجهة المعتمدة محليًا.",
    ready: "الواجهة جاهزة للتحديث.",
    saving: "جارٍ حفظ الإعدادات وتحديث اللوحة...",
    saved: "تم حفظ الإعدادات بنجاح.",
    loadingBoard: "جارٍ تحديث بيانات الصلاة...",
    fetchError: "تعذر جلب البيانات الآن. تحقق من الاتصال بالإنترنت ثم حاول مرة أخرى.",
    geoLoading: "جارٍ تحميل قوائم البلدان والمدن...",
    geoLoadError: "تعذر تحميل بيانات البلدان أو المدن الآن.",
    geoSelectStart: "اختر البلد ثم المنطقة ثم المدينة، وسيتم تحديد الموقع تلقائيًا.",
    geoCountryFallback: "يمكن استخدام {label} مباشرة أو اختيار منطقة أدق.",
    geoStateFallback: "يمكن استخدام {label} مباشرة أو اختيار مدينة أدق.",
    geoWillUse: "سيتم استخدام: {label}",
    geoApplied: "تم اعتماد {label} وتحديث المنطقة الزمنية تلقائيًا.",
    geoNoSelection: "اختر بلدًا على الأقل قبل اعتماد الموقع.",
    myLocationError:
      "تعذر الوصول إلى موقع الجهاز. يمكنك اعتماد الموقع من القوائم أو من الخريطة.",
    myLocationDone: "تم اعتماد موقع الجهاز وتحديث اللوحة.",
    mapLocation: "موقع محدد من الخريطة",
    locationUpdatedFromMap: "تم تحديث الموقع من الخريطة.",
    notificationPrompt: "يمكنك طلب إذن إشعارات المتصفح لإظهار تنبيه صامت قبل الصلاة.",
    notificationGranted: "إذن الإشعارات مفعل. سيتم إرسال تنبيه صامت قبل الصلاة.",
    notificationDenied: "تم رفض إذن الإشعارات من المتصفح.",
    notificationUnsupported: "المتصفح الحالي لا يدعم إشعارات النظام.",
    alertsDisabled: "التنبيهات الصامتة غير مفعلة حاليًا من الإعدادات.",
    nextPrayerCountdown: "يتبقى {duration} على {label}",
    nextIqamaCountdown: "يتبقى {duration} على {label}",
    adhan: "الأذان",
    iqama: "الإقامة",
    tomorrowFajr: "فجر الغد",
    prayerDone: "أُديت ضمن جدول اليوم",
    adhanAfter: "الأذان بعد {duration}",
    iqamaAfter: "الإقامة بعد {duration}",
    quietSoonTitle: "تنبيه هادئ قبل الصلاة",
    quietSoonBody:
      "تبقّى {minutes} دقيقة على {prayer}. يرجى إغلاق الهاتف والالتزام بالسكينة داخل المسجد.",
    quietSoonNow: "دخل وقت الاستعداد للصلاة، يرجى السكون وإغلاق الهاتف.",
    browserNotificationTitle: "تنبيه المسجد",
    browserNotificationBody:
      "تبقّى {minutes} دقيقة على {prayer}. يرجى إغلاق الهاتف والالتزام بالسكينة.",
    noOccasions:
      "لا توجد مناسبة قريبة في البيانات الحالية. ستظهر هنا المناسبات القادمة عند توفرها.",
    holidaySource: "من التقويم الهجري",
    holidayFallbackSource: "قائمة احتياطية",
    prayers: {
      Fajr: "الفجر",
      Dhuhr: "الظهر",
      Asr: "العصر",
      Maghrib: "المغرب",
      Isha: "العشاء",
    },
    methods: {
      3: "رابطة العالم الإسلامي",
      4: "أم القرى - مكة",
      5: "الهيئة المصرية للمساحة",
      8: "منطقة الخليج",
      14: "الإدارة الدينية لمسلمي روسيا",
    },
    remindersList: [
      {
        title: "الاستعداد للصلاة",
        body: "اللهم أعنّا على ذكرك وشكرك وحسن عبادتك، واجعل قلوبنا حاضرة خاشعة.",
      },
      {
        title: "سكون المسجد",
        body: "أجمل ما يملأ المسجد قبل الإقامة هدوء القلوب وخفض الأصوات وحضور النية.",
      },
      {
        title: "بعد الأذان",
        body: "ما بين الأذان والإقامة وقت دعاء ورجاء، فليغتنمه المصلون بالذكر والاستغفار.",
      },
    ],
    fallbackHolidays: ["بداية رمضان", "ليلة القدر", "عيد الفطر", "عيد الأضحى"],
  },
  en: {
    pageTitle: "Mosque Dashboard",
    settings: "Settings",
    controlCenter: "Control Center",
    appearance: "Appearance",
    appearanceText: "Change the language, theme, and visual details from this side panel.",
    themeDesert: "Desert",
    themeDesertText: "Warm tones for classic mosque displays",
    themeEmerald: "Emerald",
    themeEmeraldText: "Elegant green and calming atmosphere",
    themeMidnight: "Midnight",
    themeMidnightText: "A darker luxurious style for large displays",
    cycleTheme: "Change style",
    mosqueInfo: "Mosque details",
    mosqueInfoText: "Set the name, prayer method, and choose country, region, and city.",
    mosqueName: "Mosque name",
    mosqueNamePlaceholder: "Example: Al Noor Mosque",
    calcMethod: "Prayer calculation method",
    country: "Country",
    stateRegion: "State / region",
    city: "City",
    chooseCountry: "Choose country",
    chooseState: "Choose state / region",
    chooseCity: "Choose city",
    noStates: "No states found, the country location will be used",
    noCities: "No cities found, the state location will be used",
    applyGeoSelection: "Apply geographic selection",
    useMyLocation: "Use my location",
    iqamaOffsets: "Iqama offsets",
    iqamaOffsetsText: "Enter the number of minutes between adhan and iqama for each prayer.",
    silentAlerts: "Silent alerts",
    silentAlertsText:
      "Two or three minutes before prayer, a calm reminder asks worshippers to silence phones and keep the mosque quiet.",
    enableSilentAlerts: "Enable silent alerts",
    alertLeadTime: "Reminder lead time",
    browserNotifications: "Browser notifications",
    requestPermission: "Request permission",
    saveAndRefresh: "Save settings",
    heroEyebrow: "A calm experience for worshippers",
    heroTitle: "A beautiful and comfortable mosque board focused on the next prayer",
    heroText:
      "This interface is designed for mosque screens or the official website, with light Islamic ornamentation, multiple themes, and quiet reminders before prayer.",
    chip1: "Pre-prayer reminders",
    chip2: "Language and theme switch",
    chip3: "Side settings panel",
    mosque: "Mosque",
    location: "Location",
    currentTime: "Current time",
    gregorianDate: "Gregorian date",
    hijriDate: "Hijri date",
    timezone: "Timezone",
    nextPrayer: "Next prayer",
    nextIqama: "Next iqama",
    etiquette: "Mosque etiquette",
    etiquetteTitle: "Silence and phone off",
    etiquetteText:
      "Please lower your voice, silence your phone, and help keep the mosque peaceful before prayer.",
    prayerBoardEyebrow: "Today's board",
    prayerBoardTitle: "Prayer and iqama times",
    prayerBoardText:
      "Each card shows the adhan time, iqama time, and the current state of the prayer.",
    dailyReminder: "Daily reminder",
    dailyReminderTitle: "Gentle words for worshippers",
    dailyReminderText: "Short cards suitable for display inside the mosque before iqama.",
    importantDays: "Occasions",
    importantDaysTitle: "Important Hijri dates",
    importantDaysText: "Some occasions may vary based on local moon sighting.",
    mosqueMap: "Mosque map",
    mosqueMapTitle: "Current approved location",
    mosqueMapText: "You can also pin the mosque point manually from the map.",
    locationCardEyebrow: "Current location",
    coordinates: "Coordinates",
    footnote:
      "Note: prayer times and Hijri dates are calculated and may differ by one day according to local authority.",
    ready: "The interface is ready to refresh.",
    saving: "Saving settings and refreshing the board...",
    saved: "Settings saved successfully.",
    loadingBoard: "Refreshing prayer data...",
    fetchError: "Unable to fetch data right now. Please check your internet connection and try again.",
    geoLoading: "Loading countries and cities...",
    geoLoadError: "Unable to load country or city data right now.",
    geoSelectStart: "Choose country, then region, then city, and the location will be detected automatically.",
    geoCountryFallback: "{label} can be used directly, or you can choose a more specific region.",
    geoStateFallback: "{label} can be used directly, or you can choose a more specific city.",
    geoWillUse: "Will use: {label}",
    geoApplied: "{label} was applied and the timezone was detected automatically.",
    geoNoSelection: "Choose at least a country before applying the location.",
    myLocationError:
      "Unable to access device location. You can use the lists or pin the map manually.",
    myLocationDone: "Current device location was applied and the board was refreshed.",
    mapLocation: "Map-selected location",
    locationUpdatedFromMap: "Location updated from the map.",
    notificationPrompt:
      "You can request browser notification permission to show a silent reminder before prayer.",
    notificationGranted: "Notification permission is enabled. A silent reminder can be shown before prayer.",
    notificationDenied: "Notification permission was denied by the browser.",
    notificationUnsupported: "This browser does not support system notifications.",
    alertsDisabled: "Silent reminders are currently disabled from settings.",
    nextPrayerCountdown: "{duration} remaining until {label}",
    nextIqamaCountdown: "{duration} remaining until {label}",
    adhan: "Adhan",
    iqama: "Iqama",
    tomorrowFajr: "tomorrow Fajr",
    prayerDone: "Already completed within today's schedule",
    adhanAfter: "Adhan in {duration}",
    iqamaAfter: "Iqama in {duration}",
    quietSoonTitle: "Quiet reminder before prayer",
    quietSoonBody:
      "{minutes} minutes left until {prayer}. Please silence phones and keep the mosque calm.",
    quietSoonNow: "Preparation time for prayer has started. Please remain quiet and silence your phone.",
    browserNotificationTitle: "Mosque reminder",
    browserNotificationBody:
      "{minutes} minutes left until {prayer}. Please silence phones and keep the mosque calm.",
    noOccasions:
      "No nearby occasion is available in the current data. Upcoming occasions will appear here when available.",
    holidaySource: "From Hijri calendar",
    holidayFallbackSource: "Fallback list",
    prayers: {
      Fajr: "Fajr",
      Dhuhr: "Dhuhr",
      Asr: "Asr",
      Maghrib: "Maghrib",
      Isha: "Isha",
    },
    methods: {
      3: "Muslim World League",
      4: "Umm Al-Qura - Makkah",
      5: "Egyptian General Authority of Survey",
      8: "Gulf Region",
      14: "Spiritual Administration of Muslims of Russia",
    },
    remindersList: [
      {
        title: "Preparing for prayer",
        body: "O Allah, help us remember You, thank You, and worship You in the best way.",
      },
      {
        title: "Calm inside the mosque",
        body: "One of the most beautiful things before iqama is a quiet mosque and hearts that are present.",
      },
      {
        title: "After the adhan",
        body: "The time between adhan and iqama is a hopeful time for supplication and remembrance.",
      },
    ],
    fallbackHolidays: ["Start of Ramadan", "Laylat al-Qadr", "Eid al-Fitr", "Eid al-Adha"],
  },
};

const EXTRA_TRANSLATIONS = {
  ar: {
    liveWeather: "الطقس الآن",
    trustedAdhkar: "أذكار وأحاديث موثوقة",
    trustedAdhkarTitle: "أذكار وأحاديث للمصلين",
    trustedAdhkarText: "نصوص قصيرة موثوقة للعرض داخل المسجد مع ذكر المصدر.",
    heroSceneCaption: "المشهد الحي للصلاة التالية",
    weatherUnavailable: "تعذر تحديث الطقس الآن",
    weatherRangePattern: "العظمى {max}° · الصغرى {min}°",
    weatherDetailsPattern: "محسوسة {feels}° · رطوبة {humidity}% · رياح {wind} كم/س",
    todayOccasion: "مناسبة اليوم",
    tomorrowOccasion: "تنبيه لليوم القادم",
    comingSoonOccasion: "مناسبة قريبة",
    daysAwayLabel: "بعد {count} أيام",
    sourceLabel: "المصدر",
    trustedSource: "مصدر موثوق",
  },
  en: {
    liveWeather: "Live weather",
    trustedAdhkar: "Trusted adhkar & hadith",
    trustedAdhkarTitle: "Adhkar and hadith for worshippers",
    trustedAdhkarText: "Short trusted texts suitable for display inside the mosque.",
    heroSceneCaption: "Live view for the next prayer",
    weatherUnavailable: "Weather is unavailable right now",
    weatherRangePattern: "High {max}° · Low {min}°",
    weatherDetailsPattern: "Feels {feels}° · Humidity {humidity}% · Wind {wind} km/h",
    todayOccasion: "Today's occasion",
    tomorrowOccasion: "Tomorrow's notice",
    comingSoonOccasion: "Coming soon",
    daysAwayLabel: "In {count} days",
    sourceLabel: "Source",
    trustedSource: "Trusted source",
  },
};

Object.entries(EXTRA_TRANSLATIONS).forEach(([locale, messages]) => {
  Object.assign(TRANSLATIONS[locale], messages);
});

const WEATHER_CODE_MAP = {
  0: { ar: "صحو", en: "Clear", dayIcon: "☀", nightIcon: "☾" },
  1: { ar: "صحو غالبًا", en: "Mostly clear", dayIcon: "☀", nightIcon: "☾" },
  2: { ar: "غائم جزئيًا", en: "Partly cloudy", dayIcon: "⛅", nightIcon: "☁" },
  3: { ar: "غائم", en: "Cloudy", dayIcon: "☁", nightIcon: "☁" },
  45: { ar: "ضباب", en: "Fog", dayIcon: "〰", nightIcon: "〰" },
  48: { ar: "ضباب كثيف", en: "Depositing fog", dayIcon: "〰", nightIcon: "〰" },
  51: { ar: "رذاذ خفيف", en: "Light drizzle", dayIcon: "☂", nightIcon: "☂" },
  53: { ar: "رذاذ", en: "Drizzle", dayIcon: "☂", nightIcon: "☂" },
  55: { ar: "رذاذ كثيف", en: "Dense drizzle", dayIcon: "☂", nightIcon: "☂" },
  61: { ar: "مطر خفيف", en: "Light rain", dayIcon: "☂", nightIcon: "☂" },
  63: { ar: "مطر", en: "Rain", dayIcon: "☂", nightIcon: "☂" },
  65: { ar: "مطر غزير", en: "Heavy rain", dayIcon: "☂", nightIcon: "☂" },
  71: { ar: "ثلج خفيف", en: "Light snow", dayIcon: "❄", nightIcon: "❄" },
  73: { ar: "ثلج", en: "Snow", dayIcon: "❄", nightIcon: "❄" },
  75: { ar: "ثلج كثيف", en: "Heavy snow", dayIcon: "❄", nightIcon: "❄" },
  80: { ar: "زخات مطر", en: "Rain showers", dayIcon: "☔", nightIcon: "☔" },
  81: { ar: "زخات متوسطة", en: "Moderate showers", dayIcon: "☔", nightIcon: "☔" },
  82: { ar: "زخات غزيرة", en: "Violent showers", dayIcon: "☔", nightIcon: "☔" },
  95: { ar: "عاصفة رعدية", en: "Thunderstorm", dayIcon: "⚡", nightIcon: "⚡" },
  96: { ar: "عاصفة وبَرَد", en: "Storm with hail", dayIcon: "⛈", nightIcon: "⛈" },
  99: { ar: "عاصفة شديدة", en: "Severe storm", dayIcon: "⛈", nightIcon: "⛈" },
};

const FAITH_CARDS = {
  ar: [
    {
      title: "دعاء من القرآن",
      body: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
      sourceLabel: "القرآن الكريم 14:40",
      sourceUrl: "https://quran.com/14:40",
    },
    {
      title: "دعاء جامع",
      body: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      sourceLabel: "القرآن الكريم 2:201",
      sourceUrl: "https://quran.com/2/201",
    },
    {
      title: "حديث في السكينة",
      body: "إذا سمعتم الإقامة فامشوا إلى الصلاة وعليكم بالسكينة والوقار ولا تسرعوا.",
      sourceLabel: "صحيح البخاري 636",
      sourceUrl: "https://sunnah.com/bukhari:636",
    },
    {
      title: "فضل انتظار الصلاة",
      body: "الملائكة تدعو للمصلّي ما دام في مُصلّاه ينتظر الصلاة: اللهم اغفر له، اللهم ارحمه.",
      sourceLabel: "صحيح البخاري 659",
      sourceUrl: "https://sunnah.com/bukhari/10/53",
    },
  ],
  en: [
    {
      title: "Quranic supplication",
      body: "My Lord, make me and my descendants steadfast in prayer, and accept my supplication.",
      sourceLabel: "Qur'an 14:40",
      sourceUrl: "https://quran.com/14:40",
    },
    {
      title: "Comprehensive dua",
      body: "Our Lord, grant us good in this world and the Hereafter, and protect us from the Fire.",
      sourceLabel: "Qur'an 2:201",
      sourceUrl: "https://quran.com/2/201",
    },
    {
      title: "Hadith of calmness",
      body: "When you hear the iqama, come to prayer with calmness and dignity, and do not rush.",
      sourceLabel: "Sahih al-Bukhari 636",
      sourceUrl: "https://sunnah.com/bukhari:636",
    },
    {
      title: "Virtue of waiting",
      body: "The angels keep asking forgiveness and mercy for the one who remains waiting for prayer.",
      sourceLabel: "Sahih al-Bukhari 659",
      sourceUrl: "https://sunnah.com/bukhari/10/53",
    },
  ],
};

const HIJRI_OCCASIONS = [
  {
    key: "ramadan_start",
    month: 9,
    day: 1,
    title: { ar: "بداية رمضان", en: "Start of Ramadan" },
    note: {
      ar: "بداية شهر الصيام والقرآن، ويثبت دخوله بحسب الإعلان المحلي المعتمد.",
      en: "The month of fasting and the Qur'an begins, confirmed by the trusted local moon-sighting authority.",
    },
    action: {
      ar: "استقبلوا الشهر بتجديد النية وكثرة القرآن والدعاء.",
      en: "Welcome the month with renewed intention, Qur'an recitation, and supplication.",
    },
    sourceLabel: { ar: "القرآن الكريم 2:185", en: "Qur'an 2:185" },
    sourceUrl: "https://quran.com/2/185",
  },
  {
    key: "dhul_hijjah_ten",
    month: 12,
    day: 1,
    title: { ar: "بداية عشر ذي الحجة", en: "Start of the first ten of Dhul Hijjah" },
    note: {
      ar: "ثبت في الصحيح أن العمل الصالح في هذه الأيام من أفضل الأعمال.",
      en: "Authentic hadith confirms that righteous deeds in these days are among the greatest.",
    },
    action: {
      ar: "أكثروا من الذكر والتكبير والعمل الصالح.",
      en: "Increase remembrance, takbir, and righteous deeds.",
    },
    preAlert: {
      ar: "غدًا تبدأ عشر ذي الحجة، فذكّروا المصلين بالذكر والتكبير والعمل الصالح.",
      en: "Tomorrow begins the first ten days of Dhul Hijjah. Encourage remembrance, takbir, and righteous deeds.",
    },
    sourceLabel: { ar: "صحيح البخاري 969", en: "Sahih al-Bukhari 969" },
    sourceUrl: "https://sunnah.com/bukhari:969",
  },
  {
    key: "arafah",
    month: 12,
    day: 9,
    title: { ar: "يوم عرفة", en: "Day of Arafah" },
    note: {
      ar: "لغير الحاج يُستحب صيامه، وفي صحيح مسلم أن صيامه يُرجى أن يكفّر السنة الماضية والباقية.",
      en: "For non-pilgrims, fasting is recommended. Sahih Muslim mentions its hoped-for expiation of the past and coming year.",
    },
    action: {
      ar: "ذكّروا المصلين بصيامه لغير الحاج والإكثار من الدعاء.",
      en: "Remind worshippers to fast it if they are not on Hajj and to increase supplication.",
    },
    preAlert: {
      ar: "غدًا يوم عرفة، ويُستحب لغير الحاج صيامه مع الإكثار من الدعاء والذكر.",
      en: "Tomorrow is the Day of Arafah. Fasting is recommended for those not performing Hajj, along with abundant dua and remembrance.",
    },
    sourceLabel: { ar: "صحيح مسلم 1162a", en: "Sahih Muslim 1162a" },
    sourceUrl: "https://sunnah.com/muslim:1162a",
  },
  {
    key: "ashura",
    month: 1,
    day: 10,
    title: { ar: "عاشوراء", en: "Ashura" },
    note: {
      ar: "ورد في صحيح مسلم فضل صيام عاشوراء، وجاء أيضًا أن النبي ﷺ أراد صيام التاسع معه.",
      en: "Sahih Muslim mentions the virtue of fasting Ashura, and also the intention to fast the ninth along with it.",
    },
    action: {
      ar: "ذكّروا بصيام التاسع والعاشر لمن تيسّر له ذلك.",
      en: "Remind worshippers of fasting the ninth and the tenth when possible.",
    },
    preAlert: {
      ar: "غدًا عاشوراء، ويُسن صيامه، ويُستحب ضم التاسع إليه لمن تيسّر له ذلك.",
      en: "Tomorrow is Ashura. Its fast is recommended, and fasting the ninth with it is encouraged when possible.",
    },
    sourceLabel: { ar: "صحيح مسلم 1162a و1134a", en: "Sahih Muslim 1162a & 1134a" },
    sourceUrl: "https://sunnah.com/muslim:1134a",
  },
];

let state = loadState();
let map;
let marker;
let dashboardData = null;
let countriesIndex = [];
const countryCache = new Map();
let ticker = null;
let lastSilentNotificationKey = window.localStorage.getItem(NOTIFICATION_KEY) || "";

const refs = {};

document.addEventListener("DOMContentLoaded", () => {
  void initApp();
});

async function initApp() {
  cacheElements();
  bindEvents();
  if ("Notification" in window && Notification.permission === "granted") {
    state.notificationsEnabled = true;
    persistState();
  }
  hydrateForm();
  applyLocale();
  applyTheme();
  initMap();
  renderThemeButtons();
  renderDashboard();
  updateNotificationStatus();
  setStatus(t("ready"));

  await loadCountriesIndex();
  await refreshGeoSelectors();
  await loadDashboard();

  ticker = window.setInterval(updateLiveView, 1000);
}

function cacheElements() {
  refs.body = document.body;
  refs.settingsToggle = document.getElementById("settingsToggle");
  refs.settingsDrawer = document.getElementById("settingsDrawer");
  refs.drawerOverlay = document.getElementById("drawerOverlay");
  refs.closeDrawerBtn = document.getElementById("closeDrawerBtn");
  refs.langArBtn = document.getElementById("langArBtn");
  refs.langEnBtn = document.getElementById("langEnBtn");
  refs.themeButtons = Array.from(document.querySelectorAll("[data-theme-option]"));
  refs.cycleThemeBtn = document.getElementById("cycleThemeBtn");
  refs.mosqueNameInput = document.getElementById("mosqueNameInput");
  refs.calcMethodSelect = document.getElementById("calcMethodSelect");
  refs.countrySelect = document.getElementById("countrySelect");
  refs.stateSelect = document.getElementById("stateSelect");
  refs.citySelect = document.getElementById("citySelect");
  refs.applyGeoSelectionBtn = document.getElementById("applyGeoSelectionBtn");
  refs.useMyLocationBtn = document.getElementById("useMyLocationBtn");
  refs.geoSelectionHint = document.getElementById("geoSelectionHint");
  refs.iqamaInputs = {
    Fajr: document.getElementById("iqamaFajr"),
    Dhuhr: document.getElementById("iqamaDhuhr"),
    Asr: document.getElementById("iqamaAsr"),
    Maghrib: document.getElementById("iqamaMaghrib"),
    Isha: document.getElementById("iqamaIsha"),
  };
  refs.silentAlertsEnabled = document.getElementById("silentAlertsEnabled");
  refs.reminderMinutesSelect = document.getElementById("reminderMinutesSelect");
  refs.notificationPermissionBtn = document.getElementById("notificationPermissionBtn");
  refs.notificationStatus = document.getElementById("notificationStatus");
  refs.saveSettingsBtn = document.getElementById("saveSettingsBtn");
  refs.statusMessage = document.getElementById("statusMessage");
  refs.quietAlert = document.getElementById("quietAlert");
  refs.heroMosqueName = document.getElementById("heroMosqueName");
  refs.heroRegion = document.getElementById("heroRegion");
  refs.currentClock = document.getElementById("currentClock");
  refs.gregorianDate = document.getElementById("gregorianDate");
  refs.hijriDate = document.getElementById("hijriDate");
  refs.timeZoneLabel = document.getElementById("timeZoneLabel");
  refs.nextPrayerLabel = document.getElementById("nextPrayerLabel");
  refs.nextPrayerTime = document.getElementById("nextPrayerTime");
  refs.nextPrayerCountdown = document.getElementById("nextPrayerCountdown");
  refs.nextIqamaLabel = document.getElementById("nextIqamaLabel");
  refs.nextIqamaTime = document.getElementById("nextIqamaTime");
  refs.nextIqamaCountdown = document.getElementById("nextIqamaCountdown");
  refs.prayerBoard = document.getElementById("prayerBoard");
  refs.duaList = document.getElementById("duaList");
  refs.holidayList = document.getElementById("holidayList");
  refs.locationName = document.getElementById("locationName");
  refs.locationCoords = document.getElementById("locationCoords");
  refs.heroNextPrayer = document.getElementById("heroNextPrayer");
  refs.heroNextIqama = document.getElementById("heroNextIqama");
  refs.occasionBanner = document.getElementById("occasionBanner");
  refs.weatherTemp = document.getElementById("weatherTemp");
  refs.weatherSummary = document.getElementById("weatherSummary");
  refs.weatherRange = document.getElementById("weatherRange");
  refs.weatherDetails = document.getElementById("weatherDetails");
  refs.weatherIcon = document.getElementById("weatherIcon");
}

function bindEvents() {
  refs.settingsToggle.addEventListener("click", openDrawer);
  refs.closeDrawerBtn.addEventListener("click", closeDrawer);
  refs.drawerOverlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", handleGlobalKeys);

  refs.langArBtn.addEventListener("click", () => {
    void setLocale("ar");
  });
  refs.langEnBtn.addEventListener("click", () => {
    void setLocale("en");
  });

  refs.themeButtons.forEach((button) => {
    button.addEventListener("click", () => setTheme(button.dataset.themeOption));
  });
  refs.cycleThemeBtn.addEventListener("click", cycleTheme);

  refs.countrySelect.addEventListener("change", () => {
    void handleCountryChange();
  });
  refs.stateSelect.addEventListener("change", handleStateChange);
  refs.citySelect.addEventListener("change", handleCityChange);
  refs.applyGeoSelectionBtn.addEventListener("click", () => {
    void handleApplyGeoSelection();
  });
  refs.useMyLocationBtn.addEventListener("click", handleUseMyLocation);
  refs.notificationPermissionBtn.addEventListener("click", requestNotificationPermission);
  refs.saveSettingsBtn.addEventListener("click", () => {
    void handleSaveSettings();
  });
}

function handleGlobalKeys(event) {
  if (event.key === "Escape") {
    closeDrawer();
  }
}

function hydrateForm() {
  refs.mosqueNameInput.value = state.mosqueName;
  refs.calcMethodSelect.value = String(state.method);
  refs.reminderMinutesSelect.value = String(state.reminderMinutes);
  refs.silentAlertsEnabled.checked = Boolean(state.alertsEnabled);

  PRAYER_ORDER.forEach((prayerKey) => {
    refs.iqamaInputs[prayerKey].value = state.iqamaOffsets[prayerKey];
  });
}

function applyLocale() {
  document.documentElement.lang = state.locale;
  document.documentElement.dir = state.locale === "ar" ? "rtl" : "ltr";
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  refs.mosqueNameInput.placeholder = t("mosqueNamePlaceholder");
  refs.langArBtn.classList.toggle("is-active", state.locale === "ar");
  refs.langEnBtn.classList.toggle("is-active", state.locale === "en");

  updateMethodOptions();
  updatePrayerLabels();
  renderThemeButtons();
  updateNotificationStatus();
}

async function setLocale(locale) {
  if (locale === state.locale) {
    return;
  }

  state.locale = locale;
  persistState();
  applyLocale();
  await refreshGeoSelectors();

  if (dashboardData) {
    dashboardData.gregorianDate = formatGregorianDate(dashboardData.timeZone);
    dashboardData.hijriDate = formatHijriDate(dashboardData.hijriRaw);
    dashboardData.headline = buildOccasionHeadline(dashboardData.holidays);
    renderDashboard();
  }
}

function applyTheme() {
  refs.body.dataset.theme = state.theme;
  renderThemeButtons();
}

function setTheme(themeName) {
  if (!THEMES.includes(themeName)) {
    return;
  }
  state.theme = themeName;
  persistState();
  applyTheme();
}

function cycleTheme() {
  const currentIndex = THEMES.indexOf(state.theme);
  const nextTheme = THEMES[(currentIndex + 1) % THEMES.length];
  setTheme(nextTheme);
}

function renderThemeButtons() {
  if (!refs.themeButtons) {
    return;
  }
  refs.themeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.themeOption === state.theme);
  });
}

function openDrawer() {
  refs.body.classList.add("drawer-open");
  refs.settingsDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  refs.body.classList.remove("drawer-open");
  refs.settingsDrawer.setAttribute("aria-hidden", "true");
}

function initMap() {
  map = L.map("map", { zoomControl: false }).setView(
    [state.location.lat, state.location.lon],
    12
  );

  L.control.zoom({ position: "bottomleft" }).addTo(map);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  marker = L.marker([state.location.lat, state.location.lon]).addTo(map);
  updateMarkerPopup();

  map.on("click", async (event) => {
    setStatus(t("loadingBoard"), "loading");
    await applyLocation({
      lat: event.latlng.lat,
      lon: event.latlng.lng,
      label: `${t("mapLocation")} (${formatDecimal(event.latlng.lat)}, ${formatDecimal(
        event.latlng.lng
      )})`,
    });
    setStatus(t("locationUpdatedFromMap"), "success");
  });
}

async function loadCountriesIndex() {
  setGeoHint(t("geoLoading"), "loading");
  toggleGeoInputs(true);

  try {
    const response = await fetch("data/countries-index.json");
    if (!response.ok) {
      throw new Error("countries index failed");
    }

    countriesIndex = await response.json();
    populateCountryOptions(state.geoSelection.countryIso);
    toggleGeoInputs(false);
    setGeoHint(t("geoSelectStart"));
  } catch (error) {
    console.error(error);
    setGeoHint(t("geoLoadError"), "error");
  }
}

async function ensureCountryData(iso2) {
  if (countryCache.has(iso2)) {
    return countryCache.get(iso2);
  }

  const response = await fetch(`data/countries/${iso2}.json`);
  if (!response.ok) {
    throw new Error(`country data failed for ${iso2}`);
  }

  const data = await response.json();
  countryCache.set(iso2, data);
  return data;
}

function populateCountryOptions(selectedIso = "") {
  const sorted = [...countriesIndex].sort((first, second) =>
    getCountryLabel(first).localeCompare(getCountryLabel(second), localeCompareCode())
  );

  refs.countrySelect.innerHTML = "";
  refs.countrySelect.appendChild(new Option(t("chooseCountry"), ""));
  sorted.forEach((country) => {
    refs.countrySelect.appendChild(new Option(getCountryLabel(country), country.iso2));
  });
  refs.countrySelect.value = selectedIso || "";
}

function populateStateOptions(countryData, selectedName = "") {
  refs.stateSelect.innerHTML = "";
  if (!countryData) {
    refs.stateSelect.appendChild(new Option(t("chooseState"), ""));
    refs.stateSelect.disabled = true;
    return;
  }

  const states = Array.isArray(countryData.states) ? countryData.states : [];
  if (!states.length) {
    refs.stateSelect.appendChild(new Option(t("noStates"), ""));
    refs.stateSelect.disabled = true;
    return;
  }

  const sorted = [...states].sort((first, second) =>
    getStateLabel(first).localeCompare(getStateLabel(second), localeCompareCode())
  );
  refs.stateSelect.appendChild(new Option(t("chooseState"), ""));
  sorted.forEach((stateItem) => {
    refs.stateSelect.appendChild(new Option(getStateLabel(stateItem), stateItem.name));
  });
  refs.stateSelect.disabled = false;
  refs.stateSelect.value = selectedName || "";
}

function populateCityOptions(stateData, selectedName = "") {
  refs.citySelect.innerHTML = "";
  if (!stateData) {
    refs.citySelect.appendChild(new Option(t("chooseCity"), ""));
    refs.citySelect.disabled = true;
    return;
  }

  const cities = Array.isArray(stateData.cities) ? stateData.cities : [];
  if (!cities.length) {
    refs.citySelect.appendChild(new Option(t("noCities"), ""));
    refs.citySelect.disabled = true;
    return;
  }

  const sorted = [...cities].sort((first, second) =>
    first.name.localeCompare(second.name, localeCompareCode())
  );
  refs.citySelect.appendChild(new Option(t("chooseCity"), ""));
  sorted.forEach((city) => {
    refs.citySelect.appendChild(new Option(city.name, city.name));
  });
  refs.citySelect.disabled = false;
  refs.citySelect.value = selectedName || "";
}

async function refreshGeoSelectors() {
  if (!countriesIndex.length) {
    return;
  }

  populateCountryOptions(state.geoSelection.countryIso);
  if (!state.geoSelection.countryIso) {
    populateStateOptions(null);
    populateCityOptions(null);
    setGeoHint(t("geoSelectStart"));
    return;
  }

  try {
    const countryData = await ensureCountryData(state.geoSelection.countryIso);
    populateStateOptions(countryData, state.geoSelection.stateName);
    const stateData = findState(countryData, state.geoSelection.stateName);
    populateCityOptions(stateData, state.geoSelection.cityName);
    await updateGeoHint();
  } catch (error) {
    console.error(error);
    setGeoHint(t("geoLoadError"), "error");
  }
}

async function handleCountryChange() {
  state.geoSelection.countryIso = refs.countrySelect.value;
  state.geoSelection.stateName = "";
  state.geoSelection.cityName = "";
  persistState();

  if (!state.geoSelection.countryIso) {
    populateStateOptions(null);
    populateCityOptions(null);
    setGeoHint(t("geoSelectStart"));
    return;
  }

  setGeoHint(t("geoLoading"), "loading");
  try {
    const countryData = await ensureCountryData(state.geoSelection.countryIso);
    populateStateOptions(countryData);
    populateCityOptions(null);
    await updateGeoHint();
  } catch (error) {
    console.error(error);
    setGeoHint(t("geoLoadError"), "error");
  }
}

function handleStateChange() {
  state.geoSelection.stateName = refs.stateSelect.value;
  state.geoSelection.cityName = "";
  persistState();

  const countryData = countryCache.get(state.geoSelection.countryIso);
  const stateData = countryData
    ? findState(countryData, state.geoSelection.stateName)
    : null;

  populateCityOptions(stateData);
  void updateGeoHint();
}

function handleCityChange() {
  state.geoSelection.cityName = refs.citySelect.value;
  persistState();
  void updateGeoHint();
}

async function updateGeoHint() {
  const target = await getSelectedGeoTarget(false);
  if (!target) {
    setGeoHint(t("geoSelectStart"));
    return;
  }

  if (target.level === "country") {
    setGeoHint(interpolate(t("geoCountryFallback"), { label: target.label }));
    return;
  }

  if (target.level === "state") {
    setGeoHint(interpolate(t("geoStateFallback"), { label: target.label }));
    return;
  }

  setGeoHint(interpolate(t("geoWillUse"), { label: target.label }));
}

async function getSelectedGeoTarget(requireCountry = true) {
  const countryIso = refs.countrySelect.value || state.geoSelection.countryIso;
  if (!countryIso) {
    return requireCountry ? null : null;
  }

  const countryMeta = findCountry(countryIso);
  const countryData = await ensureCountryData(countryIso);
  const stateData = findState(
    countryData,
    refs.stateSelect.value || state.geoSelection.stateName
  );
  const cityData = stateData
    ? findCity(stateData, refs.citySelect.value || state.geoSelection.cityName)
    : null;

  if (cityData && hasCoords(cityData)) {
    return {
      level: "city",
      lat: Number(cityData.lat),
      lon: Number(cityData.lon),
      label: buildGeoLabel(countryMeta, stateData, cityData),
      countryIso,
      stateName: stateData.name,
      cityName: cityData.name,
    };
  }

  if (stateData && hasCoords(stateData)) {
    return {
      level: "state",
      lat: Number(stateData.lat),
      lon: Number(stateData.lon),
      label: buildGeoLabel(countryMeta, stateData),
      countryIso,
      stateName: stateData.name,
      cityName: "",
    };
  }

  if (countryData && hasCoords(countryData)) {
    return {
      level: "country",
      lat: Number(countryData.lat),
      lon: Number(countryData.lon),
      label: getCountryLabel(countryMeta),
      countryIso,
      stateName: "",
      cityName: "",
    };
  }

  return null;
}

async function handleApplyGeoSelection() {
  try {
    const target = await getSelectedGeoTarget();
    if (!target) {
      setStatus(t("geoNoSelection"), "error");
      return;
    }

    state.geoSelection = {
      countryIso: target.countryIso,
      stateName: target.stateName,
      cityName: target.cityName,
    };
    persistState();

    setStatus(t("loadingBoard"), "loading");
    await applyLocation({
      lat: target.lat,
      lon: target.lon,
      label: target.label,
    });
    setStatus(interpolate(t("geoApplied"), { label: target.label }), "success");
    closeDrawer();
  } catch (error) {
    console.error(error);
    setStatus(t("geoLoadError"), "error");
  }
}

function handleUseMyLocation() {
  if (!navigator.geolocation) {
    setStatus(t("myLocationError"), "error");
    return;
  }

  setStatus(t("loadingBoard"), "loading");
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      await applyLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        label: t("location"),
      });
      setStatus(t("myLocationDone"), "success");
    },
    () => {
      setStatus(t("myLocationError"), "error");
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
  );
}

async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    refs.notificationStatus.textContent = t("notificationUnsupported");
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    state.notificationsEnabled = true;
    persistState();
  }
  updateNotificationStatus();
}

async function handleSaveSettings() {
  setStatus(t("saving"), "loading");

  const previousMethod = state.method;
  state.mosqueName = refs.mosqueNameInput.value.trim() || defaultMosqueName();
  state.method = Number(refs.calcMethodSelect.value) || DEFAULT_STATE.method;
  state.alertsEnabled = refs.silentAlertsEnabled.checked;
  state.reminderMinutes = Number(refs.reminderMinutesSelect.value) || 3;
  state.iqamaOffsets = collectIqamaOffsets();
  persistState();

  updateMarkerPopup();

  if (dashboardData && previousMethod === state.method) {
    dashboardData.iqamaTimes = buildIqamaTimes(dashboardData.timings);
    dashboardData.gregorianDate = formatGregorianDate(dashboardData.timeZone);
    renderDashboard();
    setStatus(t("saved"), "success");
    closeDrawer();
    return;
  }

  await loadDashboard();
  setStatus(t("saved"), "success");
  closeDrawer();
}

async function applyLocation(nextLocation) {
  state.location = {
    lat: Number(nextLocation.lat.toFixed(6)),
    lon: Number(nextLocation.lon.toFixed(6)),
    label: nextLocation.label,
  };
  persistState();

  marker.setLatLng([state.location.lat, state.location.lon]);
  map.setView([state.location.lat, state.location.lon], 14, { animate: true });
  updateMarkerPopup();
  applyLocationPresentation();
  await loadDashboard();
}

async function loadDashboard() {
  setStatus(t("loadingBoard"), "loading");

  try {
    const response = await fetch(
      `https://api.aladhan.com/v1/timings?latitude=${state.location.lat}&longitude=${state.location.lon}&method=${state.method}`
    );

    if (!response.ok) {
      throw new Error("timings fetch failed");
    }

    const payload = await response.json();
    const today = payload.data;
    const zoneNow = getNowParts(today.meta.timezone);
    const monthWindow = buildMonthWindow(zoneNow.month, zoneNow.year, 8);
    const [weather, calendars] = await Promise.all([
      fetchWeather().catch((error) => {
        console.error(error);
        return null;
      }),
      Promise.all(monthWindow.map(({ month, year }) => fetchCalendar(month, year))),
    ]);
    const calendarDays = calendars.flatMap((entry) => entry.data || []);
    const holidays = extractUpcomingOccasions(calendarDays, zoneNow).slice(0, 4);

    const cleanedTimings = pickRelevantTimings(today.timings);
    dashboardData = {
      timeZone: today.meta.timezone,
      zoneDateKey: `${zoneNow.year}-${zoneNow.month}-${zoneNow.day}`,
      timings: cleanedTimings,
      iqamaTimes: buildIqamaTimes(cleanedTimings),
      gregorianDate: formatGregorianDate(today.meta.timezone),
      hijriRaw: today.date.hijri,
      hijriDate: formatHijriDate(today.date.hijri),
      holidays,
      weather,
      headline: buildOccasionHeadline(holidays),
    };

    applyLocationPresentation();
    renderDashboard();
    setStatus(t("saved"), "success");
  } catch (error) {
    console.error(error);
    setStatus(t("fetchError"), "error");
  }
}

async function fetchCalendar(month, year) {
  const response = await fetch(
    `https://api.aladhan.com/v1/calendar?latitude=${state.location.lat}&longitude=${state.location.lon}&method=${state.method}&month=${month}&year=${year}`
  );

  if (!response.ok) {
    throw new Error("calendar fetch failed");
  }

  return response.json();
}

async function fetchWeather() {
  const params = new URLSearchParams({
    latitude: String(state.location.lat),
    longitude: String(state.location.lon),
    current:
      "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",
    daily: "temperature_2m_max,temperature_2m_min",
    forecast_days: "1",
    timezone: "auto",
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!response.ok) {
    throw new Error("weather fetch failed");
  }

  const payload = await response.json();
  return {
    temperature: Number(payload.current?.temperature_2m),
    feelsLike: Number(payload.current?.apparent_temperature),
    humidity: Number(payload.current?.relative_humidity_2m),
    wind: Number(payload.current?.wind_speed_10m),
    code: Number(payload.current?.weather_code),
    isDay: Number(payload.current?.is_day) === 1,
    max: Number(payload.daily?.temperature_2m_max?.[0]),
    min: Number(payload.daily?.temperature_2m_min?.[0]),
  };
}

function buildMonthWindow(startMonth, startYear, count) {
  const items = [];
  let month = startMonth;
  let year = startYear;

  for (let index = 0; index < count; index += 1) {
    items.push({ month, year });
    const next = getNextMonth(month, year);
    month = next.month;
    year = next.year;
  }

  return items;
}

function renderDashboard() {
  refs.heroMosqueName.textContent = state.mosqueName;
  refs.heroRegion.textContent = compactLocation(state.location.label);
  refs.locationName.textContent = state.location.label;
  refs.locationCoords.textContent = `${formatDecimal(state.location.lat)}, ${formatDecimal(
    state.location.lon
  )}`;

  if (!dashboardData) {
    refs.currentClock.textContent = "--:--:--";
    refs.gregorianDate.textContent = "-";
    refs.hijriDate.textContent = "-";
    refs.timeZoneLabel.textContent = "-";
    refs.nextPrayerLabel.textContent = "-";
    refs.nextPrayerTime.textContent = "--:--";
    refs.nextPrayerCountdown.textContent = "";
    refs.nextIqamaLabel.textContent = "-";
    refs.nextIqamaTime.textContent = "--:--";
    refs.nextIqamaCountdown.textContent = "";
    refs.heroNextPrayer.textContent = "-";
    refs.heroNextIqama.textContent = "-";
    refs.prayerBoard.innerHTML = "";
    refs.duaList.innerHTML = "";
    refs.holidayList.innerHTML = "";
    refs.weatherTemp.textContent = "--°";
    refs.weatherSummary.textContent = "-";
    refs.weatherRange.textContent = "-";
    refs.weatherDetails.textContent = "-";
    refs.weatherIcon.textContent = "☀";
    refs.occasionBanner.hidden = true;
    refs.occasionBanner.innerHTML = "";
    refs.quietAlert.className = "quiet-alert card";
    refs.quietAlert.innerHTML = "";
    return;
  }

  refs.gregorianDate.textContent = dashboardData.gregorianDate;
  refs.hijriDate.textContent = dashboardData.hijriDate;
  refs.timeZoneLabel.textContent = `${dashboardData.timeZone} - ${t(`methods.${state.method}`)}`;

  renderWeather();
  renderOccasionBanner();
  renderReminders();
  renderHolidays();
  updateLiveView();
}

function renderWeather() {
  if (!dashboardData?.weather) {
    refs.weatherTemp.textContent = "--°";
    refs.weatherSummary.textContent = t("weatherUnavailable");
    refs.weatherRange.textContent = "-";
    refs.weatherDetails.textContent = "-";
    refs.weatherIcon.textContent = "☀";
    return;
  }

  const weather = dashboardData.weather;
  refs.weatherTemp.textContent = `${formatRounded(weather.temperature)}°`;
  refs.weatherSummary.textContent = weatherLabel(weather.code);
  refs.weatherRange.textContent = interpolate(t("weatherRangePattern"), {
    max: formatRounded(weather.max),
    min: formatRounded(weather.min),
  });
  refs.weatherDetails.textContent = interpolate(t("weatherDetailsPattern"), {
    feels: formatRounded(weather.feelsLike),
    humidity: formatRounded(weather.humidity),
    wind: formatRounded(weather.wind),
  });
  refs.weatherIcon.textContent = weatherIcon(weather.code, weather.isDay);
}

function renderOccasionBanner() {
  if (!dashboardData?.headline) {
    refs.occasionBanner.hidden = true;
    refs.occasionBanner.innerHTML = "";
    return;
  }

  refs.occasionBanner.hidden = false;
  refs.occasionBanner.innerHTML = `
    <strong>${dashboardData.headline.title}</strong>
    <span>${dashboardData.headline.body}</span>
    ${
      dashboardData.headline.sourceUrl
        ? `<a class="source-chip" href="${dashboardData.headline.sourceUrl}" target="_blank" rel="noreferrer">${dashboardData.headline.sourceLabel}</a>`
        : ""
    }
  `;
}

function updateLiveView() {
  if (!dashboardData) {
    return;
  }

  const nowParts = getNowParts(dashboardData.timeZone);
  const dateKey = `${nowParts.year}-${nowParts.month}-${nowParts.day}`;

  if (dateKey !== dashboardData.zoneDateKey) {
    void loadDashboard();
    return;
  }

  refs.currentClock.textContent = formatClock(dashboardData.timeZone);

  const nextPrayer = getNextEvent(dashboardData.timings, nowParts, t("adhan"));
  const nextIqama = getNextEvent(dashboardData.iqamaTimes, nowParts, t("iqama"));

  refs.nextPrayerLabel.textContent = prayerLabel(nextPrayer.key);
  refs.nextPrayerTime.textContent = dashboardData.timings[nextPrayer.key];
  refs.nextPrayerCountdown.textContent = interpolate(t("nextPrayerCountdown"), {
    duration: formatDuration(nextPrayer.diffSeconds),
    label: nextPrayer.label,
  });

  refs.nextIqamaLabel.textContent = `${prayerLabel(nextIqama.key)} - ${t("iqama")}`;
  refs.nextIqamaTime.textContent = dashboardData.iqamaTimes[nextIqama.key];
  refs.nextIqamaCountdown.textContent = interpolate(t("nextIqamaCountdown"), {
    duration: formatDuration(nextIqama.diffSeconds),
    label: nextIqama.label,
  });

  refs.heroNextPrayer.textContent = `${prayerLabel(nextPrayer.key)} ${dashboardData.timings[nextPrayer.key]}`;
  refs.heroNextIqama.textContent = `${prayerLabel(nextIqama.key)} ${dashboardData.iqamaTimes[nextIqama.key]}`;

  renderPrayerBoard(nowParts, nextPrayer.key);
  renderQuietAlert(nextPrayer);
}

function renderPrayerBoard(nowParts, nextPrayerKey) {
  refs.prayerBoard.innerHTML = "";

  PRAYER_ORDER.forEach((prayerKey) => {
    const adhanTime = dashboardData.timings[prayerKey];
    const iqamaTime = dashboardData.iqamaTimes[prayerKey];
    const stateChip = buildPrayerState(prayerKey, adhanTime, iqamaTime, nowParts);

    const card = document.createElement("article");
    card.className = `prayer-card${prayerKey === nextPrayerKey ? " is-next" : ""}`;
    card.innerHTML = `
      <h4>${prayerLabel(prayerKey)}</h4>
      <div class="timing-row">
        <span>${t("adhan")}</span>
        <strong>${adhanTime}</strong>
      </div>
      <div class="timing-row">
        <span>${t("iqama")}</span>
        <strong>${iqamaTime}</strong>
      </div>
      <div class="card-state${stateChip.active ? " is-active" : ""}">
        ${stateChip.label}
      </div>
    `;
    refs.prayerBoard.appendChild(card);
  });
}

function renderQuietAlert(nextPrayer) {
  if (!state.alertsEnabled) {
    refs.quietAlert.className = "quiet-alert card";
    refs.quietAlert.innerHTML = `<strong>${t("silentAlerts")}</strong><p>${t("alertsDisabled")}</p>`;
    return;
  }

  const thresholdSeconds = state.reminderMinutes * 60;
  if (nextPrayer.diffSeconds > thresholdSeconds || nextPrayer.diffSeconds <= 0) {
    refs.quietAlert.className = "quiet-alert card";
    refs.quietAlert.innerHTML = "";
    return;
  }

  const minutesLeft = Math.max(1, Math.ceil(nextPrayer.diffSeconds / 60));
  refs.quietAlert.className = "quiet-alert card is-visible";
  refs.quietAlert.innerHTML = `
    <strong>${t("quietSoonTitle")}</strong>
    <p>${interpolate(t("quietSoonBody"), {
      minutes: String(minutesLeft),
      prayer: prayerLabel(nextPrayer.key),
    })}</p>
  `;

  maybeSendSilentNotification(nextPrayer, minutesLeft);
}

function maybeSendSilentNotification(nextPrayer, minutesLeft) {
  if (!state.alertsEnabled || !state.notificationsEnabled) {
    return;
  }

  if (!("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  const key = `${dashboardData.zoneDateKey}-${nextPrayer.key}-${state.reminderMinutes}`;
  if (lastSilentNotificationKey === key) {
    return;
  }

  lastSilentNotificationKey = key;
  window.localStorage.setItem(NOTIFICATION_KEY, key);

  new Notification(t("browserNotificationTitle"), {
    body: interpolate(t("browserNotificationBody"), {
      minutes: String(minutesLeft),
      prayer: prayerLabel(nextPrayer.key),
    }),
    silent: true,
  });
}

function buildPrayerState(prayerKey, adhanTime, iqamaTime, nowParts) {
  const nowSeconds = toSeconds(nowParts.hour, nowParts.minute, nowParts.second);
  const adhanSeconds = timeStringToSeconds(adhanTime);
  const iqamaSeconds = timeStringToSeconds(iqamaTime);

  if (nowSeconds < adhanSeconds) {
    return {
      label: interpolate(t("adhanAfter"), {
        duration: formatDuration(adhanSeconds - nowSeconds),
      }),
      active: prayerKey === getNextEvent(dashboardData.timings, nowParts, t("adhan")).key,
    };
  }

  if (nowSeconds < iqamaSeconds) {
    return {
      label: interpolate(t("iqamaAfter"), {
        duration: formatDuration(iqamaSeconds - nowSeconds),
      }),
      active: true,
    };
  }

  return {
    label: t("prayerDone"),
    active: false,
  };
}

function getNextEvent(timings, nowParts, prefixLabel) {
  const nowSeconds = toSeconds(nowParts.hour, nowParts.minute, nowParts.second);

  for (const prayerKey of PRAYER_ORDER) {
    const eventSeconds = timeStringToSeconds(timings[prayerKey]);
    if (eventSeconds > nowSeconds) {
      return {
        key: prayerKey,
        diffSeconds: eventSeconds - nowSeconds,
        label: `${prefixLabel} ${prayerLabel(prayerKey)}`,
      };
    }
  }

  return {
    key: "Fajr",
    diffSeconds: 86400 - nowSeconds + timeStringToSeconds(timings.Fajr),
    label: `${prefixLabel} ${t("tomorrowFajr")}`,
  };
}

function buildIqamaTimes(timings) {
  const iqamaTimes = {};
  PRAYER_ORDER.forEach((prayerKey) => {
    iqamaTimes[prayerKey] = addMinutesToTime(timings[prayerKey], state.iqamaOffsets[prayerKey]);
  });
  return iqamaTimes;
}

function pickRelevantTimings(rawTimings) {
  return PRAYER_ORDER.reduce((accumulator, prayerKey) => {
    accumulator[prayerKey] = sanitizeTime(rawTimings[prayerKey]);
    return accumulator;
  }, {});
}

function renderReminders() {
  refs.duaList.innerHTML = FAITH_CARDS[state.locale]
    .map(
      (item) => `
        <article class="reminder-card">
          <h4>${item.title}</h4>
          <p>${item.body}</p>
          <div class="reminder-meta">
            <a class="source-chip" href="${item.sourceUrl}" target="_blank" rel="noreferrer">${item.sourceLabel}</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderHolidays() {
  if (!dashboardData.holidays.length) {
    refs.holidayList.innerHTML = `<div class="empty-state">${t("noOccasions")}</div>`;
    return;
  }

  refs.holidayList.innerHTML = dashboardData.holidays
    .map(
      (holiday) => `
        <article class="holiday-card">
          <h4>${localeText(holiday.title)}</h4>
          <p>${formatHijriDate(holiday.hijri)}</p>
          <p class="holiday-note">${localeText(holiday.note)}</p>
          <p class="holiday-note">${localeText(holiday.action)}</p>
          <div class="holiday-meta">
            <span>${formatCalendarGregorian(holiday.gregorian)}</span>
            <span>${occasionRelativeLabel(holiday.daysAway)}</span>
          </div>
          <a class="holiday-card__source" href="${holiday.sourceUrl}" target="_blank" rel="noreferrer">${localeText(holiday.sourceLabel) || t("trustedSource")}</a>
        </article>
      `
    )
    .join("");
}

function extractUpcomingOccasions(days, zoneNow) {
  const todayDate = new Date(Date.UTC(zoneNow.year, zoneNow.month - 1, zoneNow.day));
  const occasionItems = [];
  const seen = new Set();

  days.forEach((item) => {
    const gregorian = item.date?.gregorian;
    const hijri = item.date?.hijri;
    if (!gregorian || !hijri) {
      return;
    }

    const monthNumber = Number(hijri.month?.number);
    const dayNumber = Number(hijri.day);
    const matchingOccasion = HIJRI_OCCASIONS.find(
      (occasion) => occasion.month === monthNumber && occasion.day === dayNumber
    );

    if (!matchingOccasion) {
      return;
    }

    const occasionDate = new Date(
      Date.UTC(
        Number(gregorian.year),
        Number(gregorian.month.number) - 1,
        Number(gregorian.day)
      )
    );
    const daysAway = Math.round((occasionDate - todayDate) / 86400000);
    if (daysAway < 0) {
      return;
    }

    const stamp =
      Number(gregorian.year) * 10000 +
      Number(gregorian.month.number) * 100 +
      Number(gregorian.day);
    const dedupeKey = `${matchingOccasion.key}-${stamp}`;
    if (seen.has(dedupeKey)) {
      return;
    }
    seen.add(dedupeKey);

    occasionItems.push({
      ...matchingOccasion,
      daysAway,
      gregorianStamp: stamp,
      gregorian,
      hijri,
    });
  });

  occasionItems.sort((first, second) => first.gregorianStamp - second.gregorianStamp);
  return occasionItems;
}

function buildOccasionHeadline(holidays) {
  const todayOccasion = holidays.find((item) => item.daysAway === 0);
  if (todayOccasion) {
    return {
      title: t("todayOccasion"),
      body: `${localeText(todayOccasion.title)} - ${
        localeText(todayOccasion.action) || localeText(todayOccasion.note)
      }`,
      sourceLabel: localeText(todayOccasion.sourceLabel) || t("trustedSource"),
      sourceUrl: todayOccasion.sourceUrl || "",
    };
  }

  const tomorrowOccasion = holidays.find((item) => item.daysAway === 1 && item.preAlert);
  if (tomorrowOccasion) {
    return {
      title: t("tomorrowOccasion"),
      body: localeText(tomorrowOccasion.preAlert),
      sourceLabel: localeText(tomorrowOccasion.sourceLabel) || t("trustedSource"),
      sourceUrl: tomorrowOccasion.sourceUrl || "",
    };
  }

  const nearbyOccasion = holidays.find((item) => item.daysAway > 1 && item.daysAway <= 3);
  if (nearbyOccasion) {
    return {
      title: t("comingSoonOccasion"),
      body: `${localeText(nearbyOccasion.title)} - ${interpolate(t("daysAwayLabel"), {
        count: String(nearbyOccasion.daysAway),
      })}`,
      sourceLabel: localeText(nearbyOccasion.sourceLabel) || t("trustedSource"),
      sourceUrl: nearbyOccasion.sourceUrl || "",
    };
  }

  return null;
}

function occasionRelativeLabel(daysAway) {
  if (daysAway === 0) {
    return state.locale === "ar" ? "اليوم" : "Today";
  }
  if (daysAway === 1) {
    return state.locale === "ar" ? "غدًا" : "Tomorrow";
  }
  return interpolate(t("daysAwayLabel"), { count: String(daysAway) });
}

function localeText(value) {
  if (!value) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  return value[state.locale] || value.ar || value.en || "";
}

function formatCalendarGregorian(gregorian) {
  const value = new Date(
    Date.UTC(Number(gregorian.year), Number(gregorian.month.number) - 1, Number(gregorian.day))
  );
  return new Intl.DateTimeFormat(localeCode(), {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(value);
}

function formatRounded(value) {
  return Number.isFinite(Number(value)) ? String(Math.round(Number(value))) : "--";
}

function weatherLabel(code) {
  return localeText(WEATHER_CODE_MAP[code] || WEATHER_CODE_MAP[3]);
}

function weatherIcon(code, isDay) {
  const weather = WEATHER_CODE_MAP[code] || WEATHER_CODE_MAP[3];
  return isDay ? weather.dayIcon : weather.nightIcon;
}

function updateMethodOptions() {
  Array.from(refs.calcMethodSelect.options).forEach((option) => {
    option.textContent = t(`methods.${option.value}`);
  });
}

function updatePrayerLabels() {
  document.getElementById("labelIqamaFajr").textContent = prayerLabel("Fajr");
  document.getElementById("labelIqamaDhuhr").textContent = prayerLabel("Dhuhr");
  document.getElementById("labelIqamaAsr").textContent = prayerLabel("Asr");
  document.getElementById("labelIqamaMaghrib").textContent = prayerLabel("Maghrib");
  document.getElementById("labelIqamaIsha").textContent = prayerLabel("Isha");
}

function updateNotificationStatus() {
  if (!("Notification" in window)) {
    refs.notificationStatus.textContent = t("notificationUnsupported");
    return;
  }

  if (Notification.permission === "granted") {
    refs.notificationStatus.textContent = t("notificationGranted");
    return;
  }

  if (Notification.permission === "denied") {
    refs.notificationStatus.textContent = t("notificationDenied");
    return;
  }

  refs.notificationStatus.textContent = t("notificationPrompt");
}

function applyLocationPresentation() {
  refs.heroMosqueName.textContent = state.mosqueName;
  refs.heroRegion.textContent = compactLocation(state.location.label);
  refs.locationName.textContent = state.location.label;
  refs.locationCoords.textContent = `${formatDecimal(state.location.lat)}, ${formatDecimal(
    state.location.lon
  )}`;
}

function updateMarkerPopup() {
  if (!marker) {
    return;
  }
  marker.bindPopup(`<strong>${state.mosqueName}</strong><br>${state.location.label}`);
}

function toggleGeoInputs(isBusy) {
  refs.countrySelect.disabled = isBusy;
  refs.stateSelect.disabled = isBusy || refs.stateSelect.options.length <= 1;
  refs.citySelect.disabled = isBusy || refs.citySelect.options.length <= 1;
  refs.applyGeoSelectionBtn.disabled = isBusy;
}

function setStatus(message, tone = "") {
  refs.statusMessage.textContent = message;
  refs.statusMessage.className = "status-message";
  if (tone) {
    refs.statusMessage.classList.add(`is-${tone}`);
  }
}

function setGeoHint(message, tone = "") {
  refs.geoSelectionHint.textContent = message;
  refs.geoSelectionHint.className = "inline-hint";
  if (tone) {
    refs.geoSelectionHint.classList.add(`is-${tone}`);
  }
}

function collectIqamaOffsets() {
  const offsets = {};
  PRAYER_ORDER.forEach((prayerKey) => {
    const value = Number(refs.iqamaInputs[prayerKey].value);
    offsets[prayerKey] = Number.isFinite(value) ? Math.max(0, value) : 0;
  });
  return offsets;
}

function findCountry(iso2) {
  return countriesIndex.find((country) => country.iso2 === iso2) || null;
}

function findState(countryData, stateName) {
  if (!countryData || !stateName) {
    return null;
  }
  return countryData.states.find((stateItem) => stateItem.name === stateName) || null;
}

function findCity(stateData, cityName) {
  if (!stateData || !cityName) {
    return null;
  }
  return stateData.cities.find((city) => city.name === cityName) || null;
}

function getCountryLabel(country) {
  if (!country) {
    return "";
  }
  return state.locale === "ar"
    ? country.arName || country.nativeName || country.name
    : country.name;
}

function getStateLabel(stateItem) {
  if (!stateItem) {
    return "";
  }
  return state.locale === "ar" ? stateItem.nativeName || stateItem.name : stateItem.name;
}

function buildGeoLabel(countryMeta, stateData, cityData) {
  return [cityData?.name, stateData ? getStateLabel(stateData) : "", getCountryLabel(countryMeta)]
    .filter(Boolean)
    .join(state.locale === "ar" ? "، " : ", ");
}

function hasCoords(item) {
  return Number.isFinite(Number(item.lat)) && Number.isFinite(Number(item.lon));
}

function getNowParts(timeZone) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    numberingSystem: "latn",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  const parts = formatter.formatToParts(new Date());
  return {
    year: Number(getPart(parts, "year")),
    month: Number(getPart(parts, "month")),
    day: Number(getPart(parts, "day")),
    hour: Number(getPart(parts, "hour")),
    minute: Number(getPart(parts, "minute")),
    second: Number(getPart(parts, "second")),
  };
}

function formatClock(timeZone) {
  return new Intl.DateTimeFormat(localeCode(), {
    timeZone,
    numberingSystem: "latn",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function formatGregorianDate(timeZone) {
  return new Intl.DateTimeFormat(localeCode(), {
    timeZone,
    numberingSystem: "latn",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function formatHijriDate(hijri) {
  const weekday = state.locale === "ar" ? hijri.weekday.ar : hijri.weekday.en;
  const month = state.locale === "ar" ? hijri.month.ar : hijri.month.en;
  const suffix = state.locale === "ar" ? "هـ" : "AH";
  return `${weekday} ${hijri.day} ${month} ${hijri.year} ${suffix}`;
}

function sanitizeTime(value) {
  return String(value).split(" ")[0].trim();
}

function timeStringToSeconds(timeString) {
  const [hour, minute] = sanitizeTime(timeString).split(":").map(Number);
  return toSeconds(hour, minute, 0);
}

function toSeconds(hour, minute, second) {
  return hour * 3600 + minute * 60 + second;
}

function addMinutesToTime(timeString, minutesToAdd) {
  const [hour, minute] = sanitizeTime(timeString).split(":").map(Number);
  const total = (hour * 60 + minute + Number(minutesToAdd)) % (24 * 60);
  const safeTotal = total < 0 ? total + 24 * 60 : total;
  const nextHour = Math.floor(safeTotal / 60);
  const nextMinute = safeTotal % 60;
  return `${String(nextHour).padStart(2, "0")}:${String(nextMinute).padStart(2, "0")}`;
}

function formatDuration(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function formatDecimal(value) {
  return Number(value).toFixed(4);
}

function compactLocation(label) {
  return label
    .split(/[،,]/)
    .slice(0, 2)
    .join(state.locale === "ar" ? "، " : ", ")
    .trim();
}

function prayerLabel(prayerKey) {
  return t(`prayers.${prayerKey}`);
}

function defaultMosqueName() {
  return state.locale === "ar" ? "مسجد الحي" : "Neighborhood Mosque";
}

function loadState() {
  try {
    const rawState = window.localStorage.getItem(STORAGE_KEY);
    if (!rawState) {
      return cloneDefaultState();
    }

    const parsed = JSON.parse(rawState);
    return {
      locale: parsed.locale === "en" ? "en" : DEFAULT_STATE.locale,
      theme: THEMES.includes(parsed.theme) ? parsed.theme : DEFAULT_STATE.theme,
      mosqueName: parsed.mosqueName || DEFAULT_STATE.mosqueName,
      method: Number(parsed.method) || DEFAULT_STATE.method,
      alertsEnabled: parsed.alertsEnabled ?? DEFAULT_STATE.alertsEnabled,
      reminderMinutes: [2, 3].includes(Number(parsed.reminderMinutes))
        ? Number(parsed.reminderMinutes)
        : DEFAULT_STATE.reminderMinutes,
      notificationsEnabled:
        typeof parsed.notificationsEnabled === "boolean"
          ? parsed.notificationsEnabled
          : DEFAULT_STATE.notificationsEnabled,
      location: {
        lat: Number(parsed.location?.lat) || DEFAULT_STATE.location.lat,
        lon: Number(parsed.location?.lon) || DEFAULT_STATE.location.lon,
        label: parsed.location?.label || DEFAULT_STATE.location.label,
      },
      geoSelection: {
        countryIso: parsed.geoSelection?.countryIso || DEFAULT_STATE.geoSelection.countryIso,
        stateName: parsed.geoSelection?.stateName || DEFAULT_STATE.geoSelection.stateName,
        cityName: parsed.geoSelection?.cityName || DEFAULT_STATE.geoSelection.cityName,
      },
      iqamaOffsets: {
        Fajr: Number(parsed.iqamaOffsets?.Fajr ?? DEFAULT_STATE.iqamaOffsets.Fajr),
        Dhuhr: Number(parsed.iqamaOffsets?.Dhuhr ?? DEFAULT_STATE.iqamaOffsets.Dhuhr),
        Asr: Number(parsed.iqamaOffsets?.Asr ?? DEFAULT_STATE.iqamaOffsets.Asr),
        Maghrib: Number(parsed.iqamaOffsets?.Maghrib ?? DEFAULT_STATE.iqamaOffsets.Maghrib),
        Isha: Number(parsed.iqamaOffsets?.Isha ?? DEFAULT_STATE.iqamaOffsets.Isha),
      },
    };
  } catch (error) {
    console.error(error);
    return cloneDefaultState();
  }
}

function persistState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function localeCode() {
  return state.locale === "ar" ? "ar-SA-u-nu-latn" : "en-US-u-nu-latn";
}

function localeCompareCode() {
  return state.locale === "ar" ? "ar" : "en";
}

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], TRANSLATIONS[state.locale]);
}

function interpolate(template, values) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template
  );
}

function getPart(parts, type) {
  return parts.find((part) => part.type === type)?.value || "0";
}

function getNextMonth(month, year) {
  if (month === 12) {
    return { month: 1, year: year + 1 };
  }
  return { month: month + 1, year };
}
