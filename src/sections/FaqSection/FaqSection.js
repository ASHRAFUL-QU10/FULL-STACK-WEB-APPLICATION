const FaqSection = () => {
	return (
		<div id="faq" className="mainDiv">
			<div className="tittle flex justify-center font-bold">
				<h2 className=" my-8">Here Is The FAQ</h2>
			</div>
			<div className="w-full md:w-4/6 mx-auto my-10">
				<div
					tabIndex={0}
					className="collapse collapse-plus border border-green-400 bg-base-100 rounded-box"
				>
					<div className="collapse-title text-xl font-medium">
						Common Frequently Asked Questions
					</div>
					<div className="collapse-content">
						<p>
							Depending on your flavor of business and the products you sell,
							your FAQs will of course be different. It’s up to you to determine
							what the critical questions being asked by your unique customers
							are. Whatever content you populate your FAQ with, make sure the
							language and style is congruent with your brand personality. Who
							said FAQs had to be boring?
						</p>
					</div>
				</div>

				<div
					tabIndex={1}
					className="collapse collapse-plus border border-green-400 bg-base-100 rounded-box"
				>
					<div className="collapse-title text-xl font-medium">
						Do you ship internationally?
					</div>
					<div className="collapse-content">
						<p>
							The question on everyone’s lips, especially as ecommerce takes the
							monopoly on global retail practices. This is not a “yes” or “no”
							question (unless the answer is “yes,” in which case, declare it
							with enthusiasm) If the answer is no, take a paragraph or two to
							detail the complexities of your shipping abilities and policies,
							and clue in your customers to any plans you have to expand your
							reach in the future.
						</p>
					</div>
				</div>

				<div
					tabIndex={2}
					className="collapse collapse-plus border border-green-400 bg-base-100 rounded-box"
				>
					<div className="collapse-title text-xl font-medium">
						What is your return policy?
					</div>
					<div className="collapse-content">
						<p>
							You probably have this detailed in a special location somewhere
							else on your website. But this is likely the most frequently asked
							question in any retail situation, online or brick-and-mortar — so
							onto the FAQ page it goes. You should include a sentence or two
							about your policy, and conclude with, “Click here to learn more
							about our full return and exchange policy.
						</p>
					</div>
				</div>

				<div
					tabIndex={3}
					className="collapse collapse-plus border border-green-400 bg-base-100 rounded-box"
				>
					<div className="collapse-title text-xl font-medium">
						Why do I need your product?
					</div>
					<div className="collapse-content">
						<p>
							It gets asked more than you think. And what a wonderful
							opportunity to explain to your audience what’s so amazing about
							the work you do. Do you make skin care products for bald men? Tell
							them why caring for your bare scalp is so important. Do you run a
							sock subscription that donates a pair to homeless charities every
							time a set is sold? Tell them how their money buys more than just
							your merch. Get creative and let them know exactly why your
							products are essential.
						</p>
					</div>
				</div>

				<div
					tabIndex={4}
					className="collapse collapse-plus border border-green-400 bg-base-100 rounded-box"
				>
					<div className="collapse-title text-xl font-medium">
						I have a question not on this list.
					</div>
					<div className="collapse-content">
						<p>
							Sometimes if a customer fails to find the right answer it might be
							an issue of visibility. If your FAQ is chock-full of answers to
							your audience’s most pressing questions, you should implement a
							search feature that makes it easier to find the right As. Under
							this FAQ you should also include a link to your easy-to-use
							contact feature so that your customers can get to the bottom of
							whatever niche and unusual question they might have. On your end,
							pay attention to these contacts. Frequently asked question pages
							should always be kept fresh, and it’s your responsibility to make
							sure that new and emerging FAQs are added to the list.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
