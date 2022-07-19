
export function greeting(username = null) {
    const d = new Date();
    const time = d.getHours();

    if (time < 12) {
        return ("Good Morning!")
    }

    if (time == 12) {
        return (`Go grab a bite, it's lunch time...`)
    }

    if (time > 12 && time < 16) {
        return ("Good Afternoon!")
    }

    if (time >= 16 && time <= 19) {
        return ("Good Evening!")
    }

    if (time > 19) {
        return ("How was your day?")
    }




}