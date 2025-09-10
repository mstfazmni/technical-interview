class EventSchedular {
    eventsList = [];

    addEvent (title, date) {
        const duplicate = this.eventsList.find(
            (e) => e.title === title && e.date === date
        );

        if (duplicate) {
            console.log("Event already exist!");
        } else {
            this.eventsList.push({ title, date });
            console.log("Event added successfully!");
        }
        
    }

    listEvents () {
        const sortedList = this.eventsList.sort((a, b) => new Date(a.date) - new Date(b.date));
        //or const sortedList = this.eventsList.sort((a, b) => a.date.localeCompare(b.date)); 
        //if wanna use this format "2025-09-10"
        console.log("List of events: ", sortedList);
    }
}   

const eventSchedular1 = new EventSchedular();

eventSchedular1.addEvent("party", new Date());
eventSchedular1.addEvent("party", new Date());
eventSchedular1.addEvent("hanging out", new Date());
eventSchedular1.addEvent("sleeping", new Date());

eventSchedular1.listEvents();