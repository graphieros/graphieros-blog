---
title: vue-data-ui is on npmx, npmx is on vue-data-ui
date: 2026-02-05
description: Exploring a minimal npm-based workflow and why it exists.
tags:
  - npm
  - tooling
  - experiments
---

# vue-data-ui is on npmx

# npmx is on vue-data-ui

2026-02-06

## Random seeds

Mid January.

I had just finished publishing a patch to vue-data-ui, and was trying to solve the daily <a href="https://pangrum.com/" target="8blank">pangrum</a> puzzle in french, when this post from <a href="https://bsky.app/profile/danielroe.dev" target="_blank">Daniel Roe</a> suddenly crossed the Atmosphere and grabbed my attention:

<img src="/public/bsky-dr-init-0.png" alt="Daniel Roe Bluesky post gathering frustrations about npmjs.com">

I had been recently engaging a bit with him and <a href="https://bsky.app/profile/patak.dev" target="_blank">patak</a>, mostly loving his beautiful cat pictures, and trying to be funny with some of the weird obsessions that popup in my sometimes surrealist mind. For some reason, I was obsessed with skinny jeans, and kept mentioning skinny jeans whenever I could. I think that's on Daniel, because of a video of him swiftly climbing a wall, I figured he should try the same feat wearing tight garments.

<img src="/public/skinny-jeans1.png" alt="Me replying with skinny jeans to a very serious post from Daniel Roe">

Anyway.

The npmjs.com experience has always been a rough one for my eyes, as a member of the dark-mode team. I was not a huge fan of the sparkline chart measuring downloads, probably because of its fill colour, mostly because it just failed to render sometimes. So I posted an anwser to Daniel's probe:

<img src="/public/bsky-dr-init.png" alt="Daniel Roe Bluesky post gathering frustrations about npmjs.com">

I was sure many people would complain about the missing dark mode, but less sure anyone would comment about the chart. An ugly-looking chart still does the job.

Still, with that amount of data, the visualisation side of npmjs was obviously barely exploited.

Not long after that, Daniel sent me the following invitation:

<img src="/public/invitation.png" alt="Daniel invites me to a discord server to contribute to npmx">

The prospects of trying out something new were exciting, so I joined the discord.

Then it exploded.

## Early Big Bang

<i class="poetry">
It's funny how things start liquid.<br>
Then, water slowly turns into clay.<br>
Later, earth hopefully remains malleable.<br>
If everything has to become iron in the end<br>
Remember how beautiful it is to swim
</i>

The first days of npmx are not yet hidden behind the event horizon, though the intensity and amount of hours compressed there is starting to blur its contour.

For a start, I believe Daniel had invited the respondents to his sondage.<br>
All appeared with beautiful minds, multiple ideas, so many awesome features to craft, so much energy, and an incredible amount of kindness.<br>

<div style="display: flex; justify-content:center">
    <img src="/public/doit.png" width="200" alt="A meme of Daniel saying DO IT">
</div>

My first PR installed vue-data-ui on the project and put in place the sparkline chart we're all familiar with on npmjs, but nicer looking.

Like a Renaissance master, Daniel proposed the final touch, suggesting to add a pulse to the chart.
This of course required updating vue-data-ui with this cool feature, which makes a world of difference to the overall personality of the chart, which you can see in all its glory on any package page of <a href="https://npmx.dev/" target="_blank">npmx</a>.

From now on, we had a pulse.

<div style="display: flex; justify-content:center">
    <img src="/public/pr-merged.png" alt="The GitHub message when a PR was successfully merged">
</div>

## OSS community and care

Prior to my contributions to npmx, my experience with open-source was limited to the purview of my most successful library, vue-data-ui, a chart components library for Vue 3, which I started developing in August 2023 to polish my portfolio.

This was mostly a one-man experience.<br>
New features, fixing issues, updating the docs, etc.

I have to mention I'm new to programming, as I started learning around 2017, and landed my first programming job in 2022 (it was that easy back then). In my past life, I was a painter, a data analyst, and a conlanger, working on a constructed language called `graphieros`, a system based on hexagonal glyphs. The needs to automate stuff at work, combined with the needs to showcase graphieros on a website, lead me to learn how to code.

I don't have an imposter syndrome, because I know I'm limited. I'm decent in Vue, I'm starting to get good at data visualisation. In this spirit, vue-data-ui started as a cool experience to smash together all I had learned about the things I like: shapes, colors, numbers, and empowerment.

But!

Everything changes when you join a community of kind, very smart and talended people. My contributing to <a href="https://npmx.dev/" target="_blank">npmx</a> exposed me to the gift that is receiving contributions to my own project.

Just like that.

Because people care enough to offer valuable time to improve your own work, which becomes stronger with other minds. That's some rad brain chemistry I hope many could experience.

That PR that reduces the package size by 1Mb. A piece of beauty.

<div style="display: flex; justify-content:center">
    <img src="/public/vdu-pr0.png" alt="Screenshot of a pull request">
</div>

That PR that fixes Japanese translations in the docs ? I'm so grateful.

<div style="display: flex; justify-content:center">
    <img src="/public/vdu-pr1.png" alt="Screenshot of another pull request">
</div>

That's what open-source is about.

And I love it.

## npmx lore

Now let's relax with some npmx lore:

<img
    src="/weirdly-poetic.png"
    alt="Screenshot of a mannequin wearing a t-shirt with 'I was there before bikeshedding'"
  />

<div class="image-grid">
  <img
    src="/bikeshedding.png"
    alt="Screenshot of a mannequin wearing a t-shirt with 'I was there before bikeshedding'"
  />
  <img
    src="/dr-meme.png"
    alt="Screenshot of a mannequin wearing a t-shirt with 'I was there before bikeshedding'"
  />
</div>

## Special thanks

I want to thank Daniel for his kindness and pure genius.

I want to thank patak for his incredible generosity, altruism and thoughtfulness.

I thank all of the npmx team, you are all the best.
