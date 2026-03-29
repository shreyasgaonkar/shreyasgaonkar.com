function addExperience(k, val) {
    const company = val['company'];
    const title = val['title'];
    const dates = val['dates'];
    const img = val['img'];
    return ('<div class="box"><img src="' + img + '" alt=""><p></p><p class = "job-title">' + title + '</p> <p class = "job-dates"> ' + dates + '</p><p>' + company + '</p></div>');

}

function addProjects(k, val) {
    const project = val['name'];
    const skills = val['skills'];
    const href = val['href'];
    const img = val['img'] || './images/SG.png';
    return ('<a href="' + href + '"><div class="box"><img src="' + img + '" alt=""><p></p><p class = "job-title">' + project + '</p> <p class = "job-dates"> ' + skills + '</p></div></a>');
}

function addTestimonials(k, val) {
    const name = val['name'];
    const title = val['title'];
    const company = val['company'];
    const content = val['content'];
    const img = val['img'] || './images/SG.png';

    return ('<div class="box"><img src="' + img + '" alt=""><blockquote>' + content + '<span>' + name + ',<span class="job-dates"> ' + title + ' at ' + company + '</span></span></blockquote></div>');
}

$.getJSON("./data/experience.json", function(data) {
    $.each(data, function(key, val) {
        $('#experience').append(addExperience(key, val));
    });
}, "jsonp");

$.getJSON("./data/projects.json", function(data) {
    $.each(data, function(key, val) {
        $('#projects').append(addProjects(key, val))
    });
}, "jsonp");

$.getJSON("./data/testimonials.json", function(data) {
    $.each(data, function(key, val) {
        $('#testimonials').append(addTestimonials(key, val))
    });
}, "jsonp");