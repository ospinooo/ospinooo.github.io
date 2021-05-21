const modal_data = {
  conservatory:{
    title: "Spanish Classical Guitar Profesional Music Degree",
    link_ref: "https://conservatoriopablosarasate.educacion.navarra.es/web/",
    link_str: "Conservatorio Pablo Sarasate",
    subtitle: "6 years",
    second_subtitle: "By Conservatorio Profesional de Música Pablo Sarasate.",
    description: `Being accepted with 12 years old, I studied the great insights of classical music. 
    Harmony, melodics, composing, music production, music history with music interpretation in piano and Spanish Guitar.

    • Specialized in Spanish Guitar performance I have acted around 6 times per year.
    
    • Attend Masterclasses of excellent international artists such as Marga Escarpa in 2014, Miguel Trápaga in 2015 and Pedro Mateo in 2016. 
    • Junior member in the Chorus "Orfeon Pamplones" in 2016.

    • Extend my music production experience attending in the summer of 2015 the International Music Production School EUMES in Girona, Barcelona. Working with Cubase Software.`,
    footer: "Spain",
  },
  upna:{
    title: "Bachelor on Computer Science.",
    link_ref: "https://www.unavarra.es/home",
    link_str: "UpNa",
    subtitle: "4 years.",
    second_subtitle: "By Public University of Navarra - UpNa.",
    description: `• Awarded with <strong>highest mark</strong> among the Engineering school in the graduating year 2020. <a href="https://amp.diariodenavarra.es/noticias/navarra/2021/05/07/la-upna-premia-estudiantes-grado-master-725945-300.html">Journal</a>

    • 23 / 33 courses with Honors.
    
    • University student representative in 2017 in the Spanish National Meeting of Students of Technical and Superior Engineering in Computing, Class representative in 2016, 2017, and 2018.
    
    • Participated in google Hashcode in 2017, 2018 and 2019. Global Game Jam in 2017 and 2018. Hackathon Adidas uCode in 2018.
    
    • EURO-INF International program in Informatics Engineering.
    • Specialized in <strong>Machine Learning, Artificial Intelligence, and Computer Vision.</strong>`,
    footer: "Spain",
  },
  lodz:{
    title: "Erasmus Exchange on Computer Science.",
    link_ref: "https://www.p.lodz.pl/en",
    link_str: "TUL",
    subtitle: "6 months.",
    second_subtitle: "By Łódź University of Technology - TUL.",
    description: `Classes in Interactive web applications and Advanced algorithms and data-structures, getting highest mark possible in both subjects.

    FINAL THESIS (bachelor degree):
    <strong>"IMPLEMENTATION OF A MOBILE APPLICATION  USING  AI  ALGORITHMS  TO WARN AGAINST POISONOUS MUSHROOMS"</strong>
    
    Complete execution of machine learning process. Research topic, gathering data, structure the data, learning process, optimization and implementation in device-evaluation mode and server-evaluation mode.
    Cutting-edge techniques such as Transfer learning, CNN, pooling.

    Stack Used:
    • Python. Tensorflow, tensorflow lite and Jupyter.
    • Flask & webunicorn for Server-evaluation mode
    • Android with Java.
    `,
    footer: "Łódź, Poland.",
  },
  empro:{
    title: "Software Developer.",
    link_ref: "https://www.empro-ms.com/home/",
    link_str: "EMPRO",
    subtitle: "1 year 6 months",
    second_subtitle: "EMPRO - EOSOL SL.",
    description: `Designed, develop and deployed automatic reports generation and notification. Worked with Front-end team & Ux-team for the total personalized reports.
  
    Applied deep-Learning on Predictive maintenance solar devices.
    
    Build forecast power-production system.

    Main stack:
    • Python (Pandas, numpy, matplotlib, Jinja2, Tensorflow)
    • Javascript (nodejs, ExpressJS, JWT)
    • MySQL & InfluxDB
    • Google Cloud Platform & Docker`,
    footer: "Spain",
  },
  nispera:{
    title: "Software Engineer.",
    link_ref: "https://www.nispera.com/",
    link_str: "Nispera AG.",
    subtitle: humanizeDuration(new Date() - new Date(2020, 5, 15), {
      language: "en",
      units: ["y", "mo"],
      maxDecimalPoints: 0,
    }),
    second_subtitle: "Nispera AG.",
    description: `• Development on the real-time data acquisition from power-plant assets and third-party forecasting and weather-data services such as NASA (merra2), Metoffice (UK) and DWD (Germany) for more than 400 plant-assets all over the world.

    • Real-time alarms detection & notification for devices.

    • Database-Storage optimization of 50%.

    Stack:
    • Python (Pandas, tornado, multiprocessing)
    • MySQL - Aurora.
    • Amazon Web Services & Rundeck`,
    footer: "Zurich, Switzerland.",
  },
  this_portfolio:{
    title: "Portfolio 2021.",
    link_ref: "https://github.com/ospinooo/ospinooo.github.io",
    link_str: "Github source.",
    subtitle: "Static website built with pure HTML, SCSS and JS.",
    second_subtitle: "",
    description: `
    Portfolio Website built with pure HTML, SCSS and JS.

    Stack:
    • HTML, SCSS, JS.
    • Github Pages. (Hosting)
    • Cloudfare. (SSL & CDN)
    • Namecheap. (Domain provider)`,
    footer: "Zurich, Switzerland.",
  },
  photoshare:{
    title: "Photoshare.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo/ospinooo.github.io",
    subtitle: "Laravel Website.",
    second_subtitle: `Check it out! <a href="https://photoshare.pabloospino.com">link</a>`,
    description: `Web application built with <strong>laravel</strong>. Users can create, edit and like posts. Also, admin side not in demo.

    Stack:
    • Laravel (PHP framework).
    • Js & Ajax for specific features.
    • AWS S3 (images storage).
    • Heroku + Postgres. (Deployment).`,
    footer: "Spain",
  },
  covid_app:{
    title: "COVID Statistics app.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo/ospinooo.github.io",
    subtitle: "Android App.",
    second_subtitle: "",
    description: `Android App with general covid statistics from world view and every country. 
    Stack:
    • Android (Java).
    • Mapbox.
    • GSON.
    • Third party API for the covid data.`,
    footer: "Poland",
  },
  flappy_bird_ai:{
    title: "Flappy bird AI.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo/ospinooo.github.io",
    subtitle: "",
    second_subtitle: "",
    description: `Flappy bird learns to play itself. Flappy bird game built on python with the NEAT Reinforcement algorithm.

    Stack:
    • Python.
    • Neat library.`,
    footer: "Spain",
  },
  influx_monitoring:{
    title: "Monitoring with Influx & Grafana.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo",
    subtitle: "Monitoring ready to be deployed with docker compose, runs telegraf, grafana and Influx.",
    second_subtitle: "",
    description: `Monitoring docker-compose ready-to-deploy.

    Stack:
    • Docker-compose. (CD)
    • Telegraf. (Agent to gather data)
    • Grafana
    • Influx`,
    footer: "Spain",
  },
  music_events_webapp:{
    title: "Angular WebApp.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo/events-website",
    subtitle: "",
    second_subtitle: `Check it out! <a href="https://pabloospino.com/events-website">link</a>`,
    description: `WebApp built with Angular and Bulma (CSS) in the frontend and Spring-boot in the backend. 

    Stack:
    • Angular.
    • Bulma. (CSS framework)
    • Github Pages. (deployed)`,
    footer: "Poland",
  },
  music_events_rest_api:{
    title: "Springboot Backend.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo/events-rest-api",
    subtitle: "",
    second_subtitle: "",
    description: `Rest API for the Music Events App with Spring-Boot JWT and Hibernate.

    Extras: Developed with a docker-compose postgresql + pgadmin locally for fast-development and testing.

    Stack:
    • Springboot.
    • Hibernate. (ORM)
    • PostgreSQL
    • JWT.`,
    footer: "Poland",
  },
  ftask_mobile_app:{
    title: "Android App.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo",
    subtitle: "",
    second_subtitle: "",
    description: `Ftask is a mobile app that lets you find people to work and to work for other people based on your location.

    Ftask is built with Android Studio with Java. On the backend it uses the Parse-framework as node-js server and Mongodb database.

    Collaboration with <a href="https://illianechesa.com">Illia nechesa</a>

    Stack:
    • Android (Java) 
    • MongoDB.
    • Mapbox services for mapping.
    • Parse framework. (Backend).`,
    footer: "Spain",
  },
  game_of_life:{
    title: "Conway's Game of Life",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo",
    subtitle: "Built with C.",
    second_subtitle: "UI on terminal",
    description: `One of my first programs. 
    It is simple implementation of the famous game <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Game of life</a> with C programming language on terminal. 

    Stack:
    • C (Programming language)
    • Terminal (UI)`,
    footer: "Spain",
  },
  parser_programming_language:{
    title: "Compiler with Bison.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo",
    subtitle: "",
    second_subtitle: "",
    description: `Create a compiler with Bison, C, flex and Yacc. 
    
    Implemented:
    • Variables declaration
    • Arithmetics expressions
    • Boolean expressions
    • Flow statements If/While

    Stack:
    • C
    • Flex & Yacc
    • Bison`,
    footer: "Spain",
  },
  celery_scapper:{
    title: "Twitter Celery scrapper.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo",
    subtitle: "Retrieving info from twitter with horizontal scalability.",
    second_subtitle: "",
    description: `Implemented with the Celery protocol in python for scalability purposes.

    Stack:
    • Python.
    • Celery (python framework)
    • MQTT
    • Twitter API.`,
    footer: "Spain",
  },
  todoist_clone:{
    title: "Todo-ist clone on React.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo",
    subtitle: "",
    second_subtitle: "",
    description: `Todo-ist recreation on React/SCSS.
    
    Stack:
    • React (Js framework).
    • SCSS.
    • Twitter API.`,
    footer: "Spain",
  },
  mushsnap:{
    title: "Mushsnap.",
    link_str: "Github source.",
    link_ref: "https://github.com/ospinooo",
    subtitle: "App to recognize Poison Mushrooms with AI.",
    second_subtitle: "",
    description: `
    <strong>Final thesis project</strong>. 
    • Research, training, optimization of Model on the Poison Mushrooms classification with Transfer learning.

    Deployment on 2 architectures:
    - Server-side evaluation.
    - Mobile. Offline evaluation. (Tensorflow lite)

    Stack:
    • Python Tensorflow.
    • Flask.
    • Android APP.`,
    footer: "Spain",
  }
};


function loadDataOnModal(modal, data){
  tags = modal.children[0].children;
  for (let i=0; i<tags.length; i++){
    tag = tags[i];
    if (tag.id == "link") {
      tag.href = data["link_ref"];
      tag.innerHTML = data["link_str"];
    } else if (tag.id != "" ){
      let str = data[tag.id] || '';
    
      str = str.replace(/\n/g, "<br />");
      tag.innerHTML = str;
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var cells = document.getElementsByClassName("cell");

  for (let i=0; i< cells.length; i++){
    cell = cells[i];
    // When the user clicks on the button, open the modal
    cell.addEventListener("click", function(event){
      data = modal_data[this.id];

      loadDataOnModal(modal, data);
      modal.style.display = "block";
    })
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
})
