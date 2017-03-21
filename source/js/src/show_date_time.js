/**
 * Created by cy101 on 2017/2/11.
 */
    function show_date_time() {
        window.setTimeout("show_date_time()", 1000);
        BirthDay = new Date("2/8/2017 15:30:01");
        today = new Date();
        //总时间
        timeold = (today.getTime() - BirthDay.getTime());
        sectimeold = timeold / 1000
        secondsold = Math.floor(sectimeold);
        msPerDay = 24 * 60 * 60 * 1000
        e_daysold = timeold / msPerDay
        daysold = Math.floor(e_daysold);
        e_hrsold = (e_daysold - daysold) * 24;
        hrsold = Math.floor(e_hrsold);
        e_minsold = (e_hrsold - hrsold) * 60;
        minsold = Math.floor((e_hrsold - hrsold) * 60);
        seconds = Math.floor((e_minsold - minsold) * 60);
        span_dt_dt.innerHTML = "本站已运行 " + daysold + " 天 " + hrsold + " 小时 " + minsold + " 分 " + seconds + " 秒";
    }
show_date_time();

