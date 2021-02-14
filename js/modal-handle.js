const modal_data = {
  conservatory:{
    title: "Spanish Classical Guitar Profesional Music Degree",
    link_ref: "https://conservatoriopablosarasate.educacion.navarra.es/web/",
    link_str: "Conservatorio Pablo Sarasate",
    subtitle: "6 years",
    second_subtitle: "By Conservatorio Profesional de Música Pablo Sarasate.",
    description: `Interesting facts:
    • Specialized in Spanish Guitar performance. Performed around 6 times a year.
    
    • Attend Masterclasses of excellent artists such as Marga Escarpa in 2014, Miguel Trápaga in 2015 and Pedro Mateo in 2016. And other musical activities such as singing in the Chorus "Orfeon Pamplones" in 2016.
    
    • Extend my music production experience attending in the summer of 2015 an International Music Production School named EUMES in Girona, Barcelona. Working with Cubase Software.`,
    footer: "Pamplona, Spain.",
  },
  upna:{
    title: "Bachelor on Computer Science.",
    link_ref: "https://www.unavarra.es/home",
    link_str: "UpNa",
    subtitle: "4 years.",
    second_subtitle: "By Public University of Navarra - UpNa.",
    description: `Interesting facts:

    • 23 / 33 courses with Honors.
    
    • EURO-INF International program in Informatics Engineering.
    • Specialized in Machine Learning, Artificial Intelligence, and Computer Vision.
    
    • University student representative in 2017 in the Spanish National Meeting of Students of Technical and Superior Engineering in Computing, Class representative in 2016, 2017, and 2018.
    
    • Google Hashcode in 2017, 2018 and 2019. Global Game Jam in 2017 and 2018. Hackathon Adidas uCode in 2018.`,
    footer: "Pamplona, Spain.",
  },
  lodz:{
    title: "Erasmus Exchange on Computer Science.",
    link_ref: "https://www.p.lodz.pl/en",
    link_str: "TUL",
    subtitle: "6 months.",
    second_subtitle: "By Łódź University of Technology - TUL.",
    description: `• Final Thesis using Deep Learning, CNN, and transfer learning.
    
    THESIS: "IMPLEMENTATION OF A MOBILE APPLICATION  USING  AI  ALGORITHMS  TO WARN AGAINST POISONOUS MUSHROOMS"
    `,
    footer: "Łódź, Poland.",
  },
  empro:{
    title: "Software Developer.",
    link_ref: "https://www.empro-ms.com/home/",
    link_str: "EMPRO",
    subtitle: "1 year 6 months",
    second_subtitle: "EOSOL - EMPRO is a company focus on the monitoring of SCADA systems. Main product that EMPRO develops is its WebSite, where you have available the data from your powerplant. ",
    description: String.raw`My role in the company was part on development of SCADA Systems focused on Photovoltaic powerplants (IoT). Main project assigned was the automatic Reports generation. I was the core responsible for the Reports Generation & Notification, design, develop, deployment and maintenance. I also contributed to build forecast power-production system and I have research on Solar devices Predictive maintenance with DeepLearning for innovations in new business lines.

    Stack:
    • Python (Pandas, numpy, matplotlib, Jinja2, Tensorflow)
    • Javascript (nodejs, ExpressJS, JWT)
    • MySQL & InfluxDB
    • Google Cloud Platform & Docker`,
    footer: "Pamplona, Spain.",
  },
  nispera:{
    title: "Software Engineer.",
    link_ref: "https://www.nispera.com/",
    link_str: "Nispera AG.",
    subtitle: humanizeDuration(new Date() - new Date(2020, 7, 15), {
      language: "en",
      units: ["y", "mo"],
      maxDecimalPoints: 0,
    }),
    second_subtitle: "Main product that Nispera develops is its WebSite, where you have available the data from your powerplant. ",
    description: `My role in the company was part on development of SCADA Systems focused on Photovoltaic powerplants (IoT). Main project assigned was the automatic Reports generation. I was the core responsible for the Reports Generation & Notification, design, develop, deployment and maintenance. I also contributed to build forecast power-production system and I have research on Solar devices Predictive maintenance with DeepLearning for innovations in new business lines.

    Stack:
    • Python (Pandas, tornado, multiprocessing)
    • MySQL
    • Amazon Web Services & Rundeck`,
    footer: "Zurich, Switzerland.",
  },
  this_portfolio:{

  },
  photoshare:{

  },
  covid_app:{

  },
  flappy_bird_ai:{

  },
  influx_monitoring:{

  },
  music_events_webapp:{

  },
  music_events_rest_api:{

  },
  postresql_docker:{

  },
  ftask_mobile_app:{

  },
  game_of_life:{

  },
  parser_programming_language:{

  },
  celery_scapper:{

  },
  todoist_clone:{

  },
  mushsnap:{
    
  }
};


function loadDataOnModal(modal, data){
  tags = modal.children[0].children;
  for (let i=0; i<tags.length; i++){
    tag = tags[i];
    console.log(tag);
    if (tag.id == "link") {
      tag.href = data["link_ref"];
      tag.innerHTML = data["link_str"];
    } else if (tag.id != "" ){
      let str = data[tag.id] || '';
      console.log(str);
    
      str = str.replace(/\n/g, "<br />");
      tag.innerHTML = str;
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log(modal_data);
  // Get the modal
  var modal = document.getElementById("myModal");
  console.log(modal)
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
  console.log(span);
  
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
