GitHubActivity.feed({
    username: "bazilevsky",
    repository: "", // optional
    selector: "#feed",
    limit: 5 // optional
});

// $(document).ready(function() {
//   $('.b-hey').delay(2000).animate({
//     top: '+=54'
//   }, 2000, function() {
//     $('.b-hire').animate({
//       top: '+=54'
//     },2000);
//   });
//   $.getJSON('https://api.bazilevsky/github').done(function(data) {
//     var commits = [];
//     data.forEach(function(c) {
//       commits.push(c.date);
//       commits.push(c.content);
//     });
//     var result = commits.join('');
//     $("#github-feed").html(result);
//   });
//   $.getJSON('https://api.pomeo.me/twitter').done(function(data) {
//     var tw = [];
//     data.forEach(function(t) {
//       tw.push('<li><span>' + t.content + '</span><a href="' + t.url + '">' + t.date + '</a></li>');
//     });
//     var result = tw.join('');
//     $("#twitter-feed").html(result);
//   });
// })
