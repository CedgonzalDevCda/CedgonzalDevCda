//Component - Données personnelles
let PersonalData = {
    template: `<div>    
        <h2>Données personnelles</h2>
            <p>{{ fullname }}, {{ age }} ans</p>
            <p>{{ adresse }}</p>
            <p>{{ car == true ? 'VL' : 'Pas de véhicule' }}</p>
        </div>`,
    props: ['lastname', 'firstname', 'birthday', 'adresse', 'car'],
    computed: {
        fullname: function () {
            return `${this.firstname} ${this.lastname.toUpperCase()}`;
        },
        age: function () {
            let birthdayDate = new Date(this.birthday)
            let diff = Date.now() - birthdayDate.getTime();
            let age = new Date(diff);
            return Math.abs(age.getUTCFullYear() - 1970);
        }
    }

};
//Component - Formations
let Formations = {
    template: `
    <div>
        <h2>Formations</h2>
        <ul>
            <li v-for="school of schools">{{ school.name }} {{ school.start }} {{ school.end }}</li>
        </ul>
    </div>
    `,
    props: ['schools']
}
//Component - Experiences
let Experiences = {
    template: `
    <div>
        <h2>Expériences</h2>
        <ul>
            <li v-for="pro of pros">{{ pro.name }} {{ pro.start }} {{ pro.end }}</li>
        </ul>
    </div>
    `,
    props: ['pros']
}

// Vuejs - Root-Element
let vm = new Vue({
    el: '#app',
    components: {
        'personal-data': PersonalData,
        'formations': Formations,
        'experiences': Experiences
    },
    data: {
        // linked to HTML-Element - Données personnelles
        lastname: 'GONZALEZ',
        firstname: 'Cédric',
        birthday: '1986-10-12',
        adresse: 'allée des bartavelles',
        car: true,
        // linked to HTML-Element - Formations
        schools: [],
        // linked to HTML-Element - Expériences professionnelles
        pros: []
    },
    methods:{
        addFormation: function() {
            //select datas contained on array schools
            let schoolName = document.querySelector('#schoolName')
            let schoolStart = document.querySelector('#schoolStart')
            let schoolEnd = document.querySelector('#schoolEnd')

            //push inputs_formations in Array
            this.schools.push({
                name: schoolName.value, 
                start: schoolStart.value, 
                end: schoolEnd.value
                })

            // clear inputs_formations
            schoolName.value = ''
            schoolStart.value = ''
            schoolEnd.value = ''
        },
        addExperience: function() {
            //select datas contained on array pros
            let proName = document.querySelector('#proName')
            let proStart = document.querySelector('#proStart')
            let proEnd = document.querySelector('#proEnd')

            //push inputs_pros in Array
            this.pros.push({
                name: proName.value, 
                start: proStart.value, 
                end: proEnd.value
                })

            // clear inputs_pros
            proName.value = ''
            proStart.value = ''
            proEnd.value = ''
        }
    }
});