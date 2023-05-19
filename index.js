// FAQ Page
const faqs = document.querySelectorAll(".faq");
		for (const item of faqs) {
			const curr_faq = item.childNodes;
			console.log(curr_faq);
			const question = curr_faq[1];
			const answer = curr_faq[3];
			const icon = question.querySelector(".icon-main");
			icon.addEventListener("click", function () {
				answer.classList.toggle("non-active");
				const i = icon.querySelector("i");
				i.classList.toggle("fa-xmark");
				i.classList.toggle("fa-plus");
			});
		}

//Modalities (About Page)
const focus = document.querySelectorAll(".about_me");
		for (const item of focus) {
			const curr_focus = item.childNodes;
			console.log(curr_focus);
			const question = curr_focus[1];
			const answer = curr_focus[3];
			const icon = question.querySelector(".icon-main");
			icon.addEventListener("click", function () {
				answer.classList.toggle("non-active");
				const i = icon.querySelector("i");
				i.classList.toggle("fa-xmark");
				i.classList.toggle("fa-plus");
			});
		}