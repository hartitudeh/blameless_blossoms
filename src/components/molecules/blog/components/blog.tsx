"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Box, Typography } from "@mui/material";
import Image from "@/components/atoms/image"; // Assuming you have an Image component
import SectionLayout from "@/components/atoms/sectionLayout"; // Assuming you have a SectionLayout component
import Flex from "@/components/atoms/flex";
import Text from "@/components/atoms/text";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";

// Define the BlogPost interface
interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string[]; // Keep this as an array of strings
  image: string;
  author: string;
  date: string;
}

// Define the SideContent interface
interface SideContent {
  id: number;
  title: string;
  content: string; // This remains a single string
  image: string;
}

// Sample data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tracing the Root",
    author: "John Doe",
  date: "October 5, 2024",
    description:
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
    content: [
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
      "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
      "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
      "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
      "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
      "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
      "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
      "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
      "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
    ],
    image: "/assets/image/header-bg.jpg",
  },
  {
    id: 2,
    title: "Dwelling",
    author: "John Doe",
  date: "October 5, 2024",
    description:
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
    content: [
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
      "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
      "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
      "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
      "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
      "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
      "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
      "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
      "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
    ],
    image: "/assets/image/dwelling.jpg",
  },
  {
    id: 3,
    title: "Comrade of Comfort",
    author: "John Doe",
  date: "October 5, 2024",
    description:
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
    content: [
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
      "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
      "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
      "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
      "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
      "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
      "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
      "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
      "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
    ],
    image: "/assets/image/comrade.jpg",
  },
  {
    id: 4,
    title: "Faith On Every Corner",
    author: "John Doe",
  date: "October 5, 2024",
    description:
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
    content: [
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
      "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
      "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
      "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
      "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
      "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
      "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
      "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
      "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
    ],
    image: "/assets/image/faith.jpg",
  },
  {
    id: 5,
    title: "Tracing the Root",
    author: "John Doe",
  date: "October 5, 2024",
    description:
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
    content: [
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
      "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
      "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
      "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
      "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
      "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
      "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
      "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
      "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
    ],
    image: "/assets/image/header-bg.jpg",
  },
  {
    id: 6,
    title: "Dwelling",
    author: "John Doe",
  date: "October 5, 2024",
    description:
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
    content: [
      "Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that they were from the tree.",
      "Started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem was divided into two branches, each having tiny stems where the seeds clustered into at many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.",
      "I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages 18-20 and above. This was a burden received from God lately which started in May this year through the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the same category.",
      "Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer. When others joined, we learnt from the book that many wounds we sustain and unwanted things we do have spiritual ailments, root causes traceable to our past.",
      "While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a responsible woman? When asked to go call him, she could have made a facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.",
      "We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression to their children or write off a child whose uniqueness should be understood instead. We should have arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39; &#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold me back&#39;.",
      "This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me. Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected past generations speaking on a physical note.",
      "Christ has delivered us from ancestral curses through victory in His finished works. But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns. As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look like the next neighbour&#39;s children, they will also have innate tendencies to look like us in behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn look the way their parents used to look when they were younger but not how they look now because those things may not be there again. For instance, a woman who used to be fair in complexion as a child but later moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor which is the main.",
      "What we consciously role model for them will determine what will be seen, it will determine if some traits will become dominant or recessive. The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive. In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones transferring these tendencies to them through our carelessness.",
    ],
    image: "/assets/image/dwelling.jpg",
  },
  // Add more blog posts as needed, ensuring each content field is an array of strings
];

// Sample data for side content
const sideContent: SideContent[] = [
  {
    id: 1,
    title: "Tracing the Root",
    content:
      "Full content of Tracing the Root. This can include more details about the topic.",
    image: "/assets/image/aug.png",
  },
  {
    id: 2,
    title: "Tracing the Root",
    content:
      "Full content of Tracing the Root. This can include more details about the topic.",
    image: "/assets/image/fad.png",
  },
  {
    id: 3,
    title: "Tracing the Root",
    content:
      "Full content of Tracing the Root. This can include more details about the topic.",
    image: "/assets/image/bilal.png",
  },
  // Add more side content as needed
];

// Styled Components
const BlogPostWrapper = styled.div`
  flex: 0 0 70%;
  padding: 1rem;
`;

const SideContentWrapper = styled.div`
  flex: 0 0 25%;
  padding: 1rem;
`;

const PostCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Blog Meta (Author and Date)
const BlogMeta = styled.div`
  font-size: 1rem;
  color: #999;
  margin-bottom: 2rem;
`;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1.5,
  borderRadius: "10px",
  maxHeight: "90vh",
  overflowY: "auto",
};

const BlogPage = () => {
  const { isMobile } = useScreenResolution();
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [fullContent, setFullContent] = useState("");


  const handleOpen = (post: BlogPost) => {
    setSelectedPost(post);
    // Create a string that includes HTML for line breaks and horizontal rule
    const contentWithBreaks = post.content.join(
      "<hr style='margin: 5px 0; border: 0px;' />"
    );
    setFullContent(contentWithBreaks); // Use HTML for breaks
    setOpen(true);
  };

  const handleSideContentClick = (content: SideContent) => {
    setFullContent(
      (prev) => `${prev}\n\n---\n\n${content.title}:\n${content.content}`
    );
  };

  // const handleSideContentClick = (content: SideContent) => {
  //   const sanitizedSideContent = DOMPurify.sanitize(
  //     `${content.title}:\n${content.content}`
  //   );
  //   setFullContent((prev) => `${prev}\n\n---\n\n${sanitizedSideContent}`);
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
        }}
      />
      <Flex justify="space-between" direction={isMobile ? "column" : "row"}>
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

        <SideContentWrapper>
          <Typography style={{ fontSize: "2.5rem", fontFamily: "Whyte Inktrap" }} variant="h6">Related Articles</Typography>
          {sideContent.map((content) => (
            <PostCard
              key={content.id}
              onClick={() => handleSideContentClick(content)}
            >
              <Flex justify="flex-start" gap="1rem" width="100%" align="center" >
              <Image
                src={content.image}
                alt={content.title}
                width={50}
                styles={{ width: "10%", height: "auto" }}
              />
              <Typography style={{width: "80%", fontWeight: "bold", fontSize: "2rem",}} variant="h6">{content.title}</Typography>
              </Flex>
            </PostCard>
          ))}
        </SideContentWrapper>
      </Flex>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
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
              />{" "}
              {/* Render as HTML */}
            </>
          )}
        </Box>
      </Modal>
    </SectionLayout>
  );
};

export default BlogPage;
