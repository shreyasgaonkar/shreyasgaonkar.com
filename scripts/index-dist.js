function addExperience(n, s) { const e = s.company,
        t = s.title,
        a = s.dates; return '<div class="box"><img src="' + s.img + '" alt=""><p></p><p class = "job-title">' + t + '</p> <p class = "job-dates"> ' + a + "</p><p>" + e + "</p></div>" }

function addProjects(n, s) { const e = s.name,
        t = s.skills; return '<a href="' + s.href + '"><div class="box"><img src="' + (s.img || "./images/SG.png") + '" alt=""><p></p><p class = "job-title">' + e + '</p> <p class = "job-dates"> ' + t + "</p></div></a>" }

function addTestimonials(n, s) { const e = s.name,
        t = s.title,
        a = s.company,
        o = s.content; return '<div class="box"><img src="' + (s.img || "./images/SG.png") + '" alt=""><blockquote>' + o + "<span>" + e + ',<span class="job-dates"> ' + t + " at " + a + "</span></span></blockquote></div>" }
$.getJSON("./data/experience.json", function(n) { $.each(n, function(n, s) { $("#experience").append(addExperience(n, s)) }) }), $.getJSON("./data/projects.json", function(n) { $.each(n, function(n, s) { $("#projects").append(addProjects(n, s)) }) }), $.getJSON("./data/testimonials.json", function(n) { $.each(n, function(n, s) { $("#testimonials").append(addTestimonials(n, s)) }) });