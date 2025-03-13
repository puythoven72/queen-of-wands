class CalandarUtility {

    formatDate(date) {
        return new Date(date).toLocaleDateString()
    }


    convertMilitaryTime(timeVal) {
        if (timeVal) {
            let timeSplit = timeVal.split(':');
            let militaryHour = parseInt(timeSplit[0]);
            if (timeVal.toLowerCase().includes('p')) {
                if (parseInt(militaryHour) !== 12) {
                    militaryHour = parseInt(timeSplit[0]) + 12;
                }
            } else {
                if (parseInt(militaryHour) === 12) {
                    militaryHour = 0;
                }
            }

            let min = timeSplit[1].replace(/\D/g, "");
            return militaryHour + ":" + min;
        }
    }
    //this could be a problem  for 12am, come back to this
    convertHourFromMilitary(hr) {
        let retHr = parseInt(hr);
        let nHR = parseInt(hr)
        if (nHR > 12) {
            retHr = nHR - 12;
        }
        return retHr;
    }

    getHour(timeVal) {
        let hr = 0
        if (timeVal.includes(":")) {
            let militaryTime = this.convertMilitaryTime(timeVal).split(":");
            hr = militaryTime[0];
        }
        return hr;
    }

    getMin(timeVal) {
        let min = 0
        if (timeVal.includes(":")) {
            let militaryTime = this.convertMilitaryTime(timeVal).split(":");
            min = militaryTime[1];
        }
        return min;
    }


    getYear(date) {
        let year = 0
        if (date.includes("/")) {
            let dateSplit = date.split("/");
            year = dateSplit[2];
        }
        return year;
    }

    getMonth(date) {
        let month = 0
        if (date.includes("/")) {
            let dateSplit = date.split("/");
            month = dateSplit[0];
        }
        return month;
    }

    getDay(date) {
        let day = 0
        if (date.includes("/")) {
            let dateSplit = date.split("/");
            day = dateSplit[1];
        }
        return day;
    }


}
export default new CalandarUtility;