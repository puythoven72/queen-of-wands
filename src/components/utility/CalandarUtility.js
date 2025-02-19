class CalandarUtility {

    formatDate(date) {
        return new Date(date).toLocaleDateString()
    }


    convertMilitaryTime(timeVal) {
        if (timeVal) {
            let timeSplit = timeVal.split(':');
            let militaryHour = parseInt(timeSplit[0]);
            if (timeVal.toLowerCase().includes('p')) {
                militaryHour = parseInt(timeSplit[0]) + 12;
            }
            let min = timeSplit[1].replace(/\D/g, "");
            return militaryHour + ":" + min;
        }
    }

    convertHourFromMilitary(hr) {
        let retHr =parseInt(hr);
        let nHR =parseInt(hr)
        console.log(hr +"???");
        if (nHR > 12) {
            console.log("TRUE");
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
        console.log(year + " year ");
        return year;
    }

    getMonth(date) {
        let month = 0
        if (date.includes("/")) {
            let dateSplit = date.split("/");
            month = dateSplit[0];
        }
        console.log(month + " month ");
        return month;
    }

    getDay(date) {
        let day = 0
        if (date.includes("/")) {
            let dateSplit = date.split("/");
            day = dateSplit[1];
        }
        console.log(day + " day ");
        return day;
    }


}
export default new CalandarUtility;