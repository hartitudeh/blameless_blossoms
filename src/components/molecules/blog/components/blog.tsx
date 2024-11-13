"use client";
import React, { useState } from "react";
// import styled from "styled-components";
import { Modal, Box, Typography } from "@mui/material";
import Image from "@/components/atoms/image"; // Assuming you have an Image component
import SectionLayout from "@/components/atoms/sectionLayout"; // Assuming you have a SectionLayout component
// import Flex from "@/components/atoms/flex";
import Text from "@/components/atoms/text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
// import SideConent from "./sideContent";
import ProfileCard from "./myBlog";


// Define the BlogPost interface
interface Comment {
  id: number;
  author: string;
  text: string;
  likes: number;
  replies: Comment[];
}

interface BlogPost {
  id: number;
  title: string;
  content: string[];
  image: string;
  author: string;
  date: string;
  description: string;
  likes: number;
  comments: Comment[];
}


// Sample data for blog posts
// const blogPosts: BlogPost[] = [
//   {
//     id: 2,
//     title: "Indwelling",
//     author: "Imisi Adekoya",
//   date: "December 15, 2021",
//     description:
//       "Parousia Magazine is a name to reckon with when it comes to publishing Christian literary works to a global audience; this we have been doing for 6 years and we shall keep doing. I am glad many of you who are our readers and contributors see into this vision, support it and through your influence, we have been able to grow to where we are today. We have no limitations however in our service there has to be integrity.",
//     content: [
//       "I welcome you to the long-awaited Parousia Magazine Indwelling Issue 13. Thank you for staying true to us, cheering us on, and giving us all the positive vibe we need. I have personally received your gracious embrace in calls, messages, and in-person greetings and this kind act of yours doesn’t just give me joy but motivates me. This is why Issue 13 came to life.",
//       "Parousia Magazine is a name to reckon with when it comes to publishing Christian literary works to a global audience; this we have been doing for 6 years and we shall keep doing. I am glad many of you who are our readers and contributors see into this vision, support it and through your influence, we have been able to grow to where we are today. We have no limitations however in our service there has to be integrity.",
//       "This we have decided to uphold by publishing four Poets in our Indwelling Issue. This is our 13th Issue, we have made progress but we have no pleasure in following the crowd and pleasing the world. We are distinct, unique for we have our essence, message.",
//       "We desire to publish the very best of literary works from contributors all over the world but when we call for submission for a particular issue with a theme, we want to receive stories and contributions that pertain to the theme.",
//       "We received several submissions for this issue but we are only pleased with the poetry of Abigail-Tydale Bassey, Ayooluwa Olasupo (Ìmísí), Osy Mizpah Unuevho, and Pamilerin Jacob. The poetry of these four contributors is worth reading and deserved to be published therefore Indwelling Issue 13 is a publication for every lover of Christian literature to read and enjoy its sweet savour.",
//       "Abimbola Olaleye came up with the idea for this particular issue while I named it. Thank you, Abimbolar for all the excellent work she has been doing at Parousia since she joined a year ago. Thank you, Abimbola.",
//       "Indwelling Issue 13 begins with the poetry of a renowned Nigerian Poet, Pamilerin Jacob whom I have the privilege to serve alongside in the annual SprinNG Fellowship Programme as a Mentor. His two poems ‘That I May Know Him’ and ‘Bones, Wind, (Un)Belief’ speaks volumes of his versatility, poetic skills, rich use of imageries, and Biblical allusion. A metaphorical sandwich, desirable for a poetic dose. Abigail-Tydale Bassey didn’t fail to deliver to us an ‘Overwhelming’ poetic narration of the ‘Comforter’ with ‘Speaking in Tongues’.  Ayooluwa Olasupo (Ìmísí) gives us the poetic narration of how ‘that Spirit of grace encountered us’ and ‘The floods raging against the treasures hidden in us’ with her poems ‘Transformed From Hypocrites To Witnesses’ and ‘Living Arks’. You would have a lasting impression with the poems of Osy Mizpah Unuevho. ‘Lightweight in the Sketch of the Indwelling’, ‘on fire with nails’ and ‘small rivers, in the flesh and blood’ are well versed written to make your heart burn while you read.",
//       "You are about to rekindle the fire of savouring good Christian poetry as you read Parousia Magazine Indwelling Issue 13.",
//       "This issue also features book reviews and author interviews of Chinwe Chnaka , Vincent O. Olojo whose books were published by Parousiare published by Parousia",
//       "I am hopeful you will love it and aspire to read our next Issue.",
//       "Hurray!!! We are SIX. From November 2015 till now, it has been a great privilege serving you and I look forward to decades of unending servitude.",
//     ],
//     image: "/assets/image/dwelling.jpg",
//     likes: 0,
//     comments: [],
//   },
//   {
//     id: 3,
//     title: "Comrade of Comfort",
//     author: "Imisi Adekoya",
//   date: "October 5, 2024",
//     description:
//       "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
//     content: [
//       "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
//       "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
//       "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
//       "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
//       "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
//       "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
//       "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
//       "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
//       "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
//     ],
//     image: "/assets/image/comrade.jpg",
//     likes: 0,
//     comments: [],
//   },
//   {
//     id: 4,
//     title: "Faith On Every Corner",
//     author: "Imisi Adekoya",
//   date: "October 5, 2024",
//     description:
//       "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
//     content: [
//       "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
//       "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
//       "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
//       "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
//       "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
//       "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
//       "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
//       "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
//       "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
//     ],
//     image: "/assets/image/faith.jpg",
//     likes: 0,
//     comments: [],
//   },
//   {
//     id: 5,
//     title: "Tracing the Root",
//     author: "Imisi Adekoya",
//   date: "October 5, 2024",
//     description:
//       "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
//     content: [
//       "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
//       "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
//       "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
//       "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
//       "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
//       "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
//       "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
//       "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
//       "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
//     ],
//     image: "/assets/image/header-bg.jpg",
//     likes: 0,
//     comments: [],
//   },
//   {
//     id: 6,
//     title: "Dwelling",
//     author: "Imisi Adekoya",
//   date: "October 5, 2024",
//     description:
//       "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
//     content: [
//       "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
//       "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
//       "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
//       "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
//       "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
//       "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
//       "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
//       "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
//       "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
//     ],
//     image: "/assets/image/dwelling.jpg",
//     likes: 0,
//     comments: [],
//   },

// ];


// Styled Components
// const BlogPostWrapper = styled.div`
//   flex: 0 0 70%;
//   padding: 1rem;
// `;


// const PostCard = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 1rem;
//   margin-bottom: 1rem;
//   cursor: pointer;
//   transition: box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;

// Blog Meta (Author and Date)
// const BlogMeta = styled.div`
//   font-size: 1rem;
//   color: #999;
//   margin-bottom: 2rem;
// `;


const BlogPage = () => {
  const { isMobile } = useScreenResolution();
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [fullContent, setFullContent] = useState("");


  // const handleOpen = (post: BlogPost) => {
  //   setSelectedPost(post);
  //   const contentWithBreaks = post.content.join(
  //     "<hr style='margin: 5px 0; border: 0px;' />"
  //   );
  //   setFullContent(contentWithBreaks); 
  //   setOpen(true);
  // };


  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
    setFullContent("");
  };

  return (
    <SectionLayout style={{ marginTop: "5rem" }}>
      <Text
        type="h1"
        text="My Blogs"
        weight={700}
        size={isMobile ? "3.2rem" : "5.052rem"}
        styles={{
          lineHeight: isMobile ? "2.56rem" : "6.06rem",
          fontFamily: "Whyte Inktrap",
          display: isMobile ? "none" : "block",
        }}
      />
      {/* <Flex justify="space-between" direction={isMobile ? "column" : "row"}>
        <BlogPostWrapper>
          {blogPosts.map((post) => (
            <PostCard key={post.id} onClick={() => handleOpen(post)}>
              <Image
                src={post.image}
                alt={post.title}
                styles={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "350px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <Typography
                style={{ fontSize: "3rem", fontFamily: "Whyte Inktrap" }}
                variant="h5"
              >
                {post.title}
              </Typography>
              <BlogMeta>
              {`By ${post.author} | ${post.date}`}
            </BlogMeta>
              <Typography
                style={{ color: "#5d5d5d", fontSize: "1.5rem" }}
                variant="body1"
              >
                {post.description}
              </Typography>
            </PostCard>
          ))}
        </BlogPostWrapper>

        <SideConent />
      </Flex> */}

      <ProfileCard />

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "50%" },  
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 1.5,
          borderRadius: "10px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}>
          {selectedPost && (
            <>
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                styles={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "350px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <Typography
                style={{ fontSize: "3rem", fontFamily: "Whyte Inktrap" }}
                variant="h4"
              >
                {selectedPost.title}
              </Typography>
              
              <div
                style={{ color: "#5d5d5d", fontSize: "1.5rem" }}
                dangerouslySetInnerHTML={{ __html: fullContent }}
              />
            </>
          )}
        </Box>
      </Modal>
    </SectionLayout>
  );
};

export default BlogPage;



