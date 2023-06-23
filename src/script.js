// expenditure
const arr = [];
arr[0] = {
  "name": "Maria Smantha",
  "role": "Web Developer",
  "image": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
  "about": "Lorem ipsum dolor sit amet, consectetur \
            adipisicing elit. A aliquam amet animi \
            blanditiis consequatur debitis dicta\
            distinctio, enim error eum iste libero modi\
            nam natus perferendis possimus quasi sint sit\
            tempora voluptatem. Est, exercitationem id\
            ipsa ipsum laboriosam perferendis",
};
arr[1] = {
  "name": "Lisa Cudrow",
  "role": "Graphic Designer",
  "image": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
  "about": "Sed ut perspiciatis unde omnis iste natus\
            adipisicing elit. A aliquam amet animi \
            blanditiis consequatur debitis dicta\
            tempora voluptatem. Est, exercitationem id\
            ipsa ipsum laboriosam perferendis",
};
arr[2] = {
  "name": "John Smith",
  "role": "Marketing Specialist",
  "image": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  "about": "At vero eos et accusamus et iusto odio\
            adipisicing elit. A aliquam amet animi \
            blanditiis consequatur debitis dicta\
            tempora voluptatem. Est, exercitationem id\
            ipsa ipsum laboriosam perferendis",
};

function change(cnt) {
  let curr = 1 * document.getElementById("curr_count").innerHTML;
  curr += cnt + arr.length;
  curr %= 1 * arr.length;
  curr = Math.abs(curr);
  document.getElementById("curr_count").innerHTML = curr;

  let str = `<div class="carousel-item active">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10 col-xl-8">
        <div class="row">
          <div
            class="col-lg-4 d-flex justify-content-center"
          >
            <img
              src="${arr[curr].image}"
              class="rounded-circle shadow-1 mb-4 mb-lg-0"
              alt="woman avatar"
              width="150"
              height="150"
            />
          </div>
          <div
            class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0"
          >
            <h4 class="mb-4">
              ${arr[curr].name} - ${arr[curr].role}
            </h4>
            <p class="mb-0 pb-3">
                ${arr[curr].about}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  console.log(str);
  document.getElementById("show").innerHTML = str;
}

$(window).on('load', function () {
  change(0);
});
