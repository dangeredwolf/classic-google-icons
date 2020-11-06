var browser = browser || chrome;

const rules = {

	/* Gmail */
	"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png": "icons/logo_gmail_lockup_default_2x.png",
	"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png": "icons/logo_gmail_lockup_default_1x.png",
	"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png": "icons/logo_gmail_lockup_dark_1x.png",
	"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_r2.png": "icons/logo_gmail_lockup_dark_2x.png",
	"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico": "favicons/gmail.ico",
	"https://www.google.com/a/.+/images/favicon.ico": "favicons/gmail.ico",
	"https://www.google.com/gmail/about/static/images/logo-gmail.png": "icons/logo-gmail.png",
	"https://google.com/gmail/about/static/favicon.ico": "favicons/gmail.ico",
	"https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_32dp.png": "favicons/gmail.ico",
	"https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_16dp.png": "favicons/gmail.ico",


	/* Calendar */
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_1_2x.png": "icons/calendar/2x/cal_01_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_2_2x.png": "icons/calendar/2x/cal_02_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_3_2x.png": "icons/calendar/2x/cal_03_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_4_2x.png": "icons/calendar/2x/cal_04_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_5_2x.png": "icons/calendar/2x/cal_05_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_6_2x.png": "icons/calendar/2x/cal_06_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_7_2x.png": "icons/calendar/2x/cal_07_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_8_2x.png": "icons/calendar/2x/cal_08_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_9_2x.png": "icons/calendar/2x/cal_09_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_11_2x.png": "icons/calendar/2x/cal_11_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_12_2x.png": "icons/calendar/2x/cal_12_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_13_2x.png": "icons/calendar/2x/cal_13_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_14_2x.png": "icons/calendar/2x/cal_14_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_15_2x.png": "icons/calendar/2x/cal_15_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_16_2x.png": "icons/calendar/2x/cal_16_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_17_2x.png": "icons/calendar/2x/cal_17_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_18_2x.png": "icons/calendar/2x/cal_18_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_19_2x.png": "icons/calendar/2x/cal_19_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_21_2x.png": "icons/calendar/2x/cal_21_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_22_2x.png": "icons/calendar/2x/cal_22_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_23_2x.png": "icons/calendar/2x/cal_23_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_24_2x.png": "icons/calendar/2x/cal_24_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_25_2x.png": "icons/calendar/2x/cal_25_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_26_2x.png": "icons/calendar/2x/cal_26_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_27_2x.png": "icons/calendar/2x/cal_27_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_28_2x.png": "icons/calendar/2x/cal_28_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_29_2x.png": "icons/calendar/2x/cal_29_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_30_2x.png": "icons/calendar/2x/cal_30_v2.png",
	"https://ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/calendar_31_2x.png": "icons/calendar/2x/cal_31_v2.png",

	"https://www.gstatic.com/companion/icon_assets/fgdY29RxT2yHBfEODHlF70ZI3ytOaPoX/calendar_v3_2x.png": "icons/calendar_40x.png",
	"https://www.gstatic.com/companion/icon_assets/fgdY29RxT2yHBfEODHlF70ZI3ytOaPoX/logo_calendar_v3_64dp.svg": "icons/logo_calendar_64dp.svg",


	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_1.ico": "favicons/calendar/1.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_2.ico": "favicons/calendar/2.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_3.ico": "favicons/calendar/3.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_4.ico": "favicons/calendar/4.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_5.ico": "favicons/calendar/5.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_6.ico": "favicons/calendar/6.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_7.ico": "favicons/calendar/7.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_8.ico": "favicons/calendar/8.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_9.ico": "favicons/calendar/9.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_10.ico": "favicons/calendar/10.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_11.ico": "favicons/calendar/11.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_12.ico": "favicons/calendar/12.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_13.ico": "favicons/calendar/13.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_14.ico": "favicons/calendar/14.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_15.ico": "favicons/calendar/15.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_16.ico": "favicons/calendar/16.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_17.ico": "favicons/calendar/17.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_18.ico": "favicons/calendar/18.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_19.ico": "favicons/calendar/19.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_20.ico": "favicons/calendar/20.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_21.ico": "favicons/calendar/21.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_22.ico": "favicons/calendar/22.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_23.ico": "favicons/calendar/23.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_24.ico": "favicons/calendar/24.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_25.ico": "favicons/calendar/25.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_26.ico": "favicons/calendar/26.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_27.ico": "favicons/calendar/27.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_28.ico": "favicons/calendar/28.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_29.ico": "favicons/calendar/29.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_30.ico": "favicons/calendar/30.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v2/calendar_31.ico": "favicons/calendar/31.ico",

	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_1.ico": "favicons/calendar/1.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_2.ico": "favicons/calendar/2.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_3.ico": "favicons/calendar/3.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_4.ico": "favicons/calendar/4.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_5.ico": "favicons/calendar/5.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_6.ico": "favicons/calendar/6.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_7.ico": "favicons/calendar/7.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_8.ico": "favicons/calendar/8.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_9.ico": "favicons/calendar/9.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_10.ico": "favicons/calendar/10.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_11.ico": "favicons/calendar/11.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_12.ico": "favicons/calendar/12.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_13.ico": "favicons/calendar/13.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_14.ico": "favicons/calendar/14.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_15.ico": "favicons/calendar/15.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_16.ico": "favicons/calendar/16.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_17.ico": "favicons/calendar/17.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_18.ico": "favicons/calendar/18.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_19.ico": "favicons/calendar/19.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_20.ico": "favicons/calendar/20.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_21.ico": "favicons/calendar/21.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_22.ico": "favicons/calendar/22.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_23.ico": "favicons/calendar/23.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_24.ico": "favicons/calendar/24.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_25.ico": "favicons/calendar/25.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_26.ico": "favicons/calendar/26.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_27.ico": "favicons/calendar/27.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_28.ico": "favicons/calendar/28.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_29.ico": "favicons/calendar/29.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_30.ico": "favicons/calendar/30.ico",
	"https://calendar.google.com/googlecalendar/images/favicons_fttmIIlBXU2Ldf6JaL09WmFY3NDc1zq1/v3/calendar_31.ico": "favicons/calendar/31.ico",

	/* Meet */
	"https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png": "icons/google_meet_horizontal_wordmark_icon_40dp.png",
	"https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png": "icons/google_meet_horizontal_wordmark_icon_80dp.png",
	"https://www.gstatic.com/meet/google_meet_primary_horizontal_2020q4_logo_be3f8c43950bd1e313525ada2ce0df44.svg": "icons/google_meet_primary_horizontal.svg",
	"https://www.gstatic.com/meet/meet_logo_light_2020q4_a18dd0004704d4dfc24b1519e599eadc.svg": "icons/google_meet_primary_horizontal.svg",
	"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-24dp/logo_meet_2020q4_color_1x_web_24dp.png": "icons/meet_64dp.png",
	"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-32dp/logo_meet_2020q4_color_1x_web_32dp.png": "icons/meet_64dp.png",
	"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-36dp/logo_meet_2020q4_color_1x_web_36dp.png": "icons/meet_64dp.png",
	"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png": "icons/meet_64dp.png",
	"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-64dp/logo_meet_2020q4_color_1x_web_64dp.png": "icons/meet_64dp.png",
	"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_1x_web_96dp.png": "icons/meet_64dp.png",
	"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-512dp/logo_meet_2020q4_color_1x_web_512dp.png": "icons/meet_64dp.png",
	"https://lh3.googleusercontent.com/5CsRqfMEP1Rv-PPv9G4962lyEuvb4roSLJHJQWPbmCa51AmvynfoGfoKsKiS87QhX07xQMZAeLp8qoSy7CjVZkXJ1WapQiJkroCeJw": "icons/meet_64dp.png",

	/* Drive */
	"https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png": "icons/drive_48dp.png",
	"https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png": "icons/drive_48dp@2x.png",
	"https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png": "icons/drive_48dp.png",
	"https://kstatic.googleusercontent.com/files/f4b4fbcc6119576da7ab3f68270196009fc1b16f1927910842d793c385115593b6dd5fbe9a1e21fe64f3cbbc509c3a02c95ebc9635f76c355282482986f1fe7d": "icons/Logo_Drive_01.svg",
	"https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png": "icons/drive_48dp.png",
	"https://ssl.gstatic.com/images/branding/product/2x/hh_drive_24dp.png": "icons/drive_48dp.png",

	/* Maps */
	"https://www.google.com/images/branding/product/ico/maps15_bnuw3a_32dp.ico": "favicons/maps.ico",
	"https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png": "icons/maps_48x.png",
	"https://www.gstatic.com/companion/icon_assets/logo_maps_v2_64dp.svg": "icons/maps_256x.png",
	"https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q": "icons/maps_512dp.png",
	"https://www.google.com/maps/about/images/icons/maps_512dp.png": "icons/maps_512dp.png",
	"https://www.google.com/maps/about/images/icons/maps_32dp.png": "icons/maps_512dp.png",
	"https://www.google.com/maps/about/images/icons/maps_16dp.png": "icons/maps_512dp.png",

	/* Keep */
	"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png": "icons/keep_48dp.png",
	"https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png": "icons/keep_48dp@2x.png",
	"https://ssl.gstatic.com/keep/icon_2020q4v2_128.png": "icons/keep_48dp@2x.png",
	"https://ssl.gstatic.com/keep/keep_2020q4v2.ico": "icons/keep_48dp@2x.png",

	/* Photos */
	"https://ssl.gstatic.com/social/photosui/images/logo/1x/photos_64dp.png": "favicons/photos.ico",

	/* Spritesheet */
	"https://ssl.gstatic.com/gb/images/p1_5df01b81.png": "icons/p1_5df01b81.png"
}

browser.webRequest.onBeforeRequest.addListener(
	obj => {
		//console.log(obj);
		for (let i in rules) {
			if (obj.url.match(new RegExp(i, "g"))) {
				return {redirectUrl: browser.runtime.getURL("images/" + rules[i])}
			}
		}
	},
	{urls: ["https://*.googleusercontent.com/*", "https://ssl.gstatic.com/*", "https://fonts.gstatic.com/*", "https://www.gstatic.com/*", "https://calendar.google.com/*", "https://www.google.com/*"]},
	["blocking"]
)

browser.webNavigation.onDOMContentLoaded.addListener(function () {
	browser.tabs.query({
		active: true,
	}, tabs => {
		if (tabs && tabs[0] && tabs[0].favIconUrl) {
			let tab = tabs[0];
			for (let i in rules) {
				if (tab.favIconUrl.match(new RegExp(i, "g"))) {
					var newURL = browser.runtime.getURL("images/" + rules[i]);
					browser.tabs.executeScript(tab.id, {
						code: `var ilist=document.querySelectorAll('link[rel="shortcut icon"],link[rel="icon"],link[rel="favicon"]');if(ilist&&ilist[0])for(var elem of ilist)elem.href="${newURL}";console.log('classic-google-icons: Overrode favicon url')`
					});
				}
			}
		}
	});
},
{ urls: ["https://*.google.com/*"] });
