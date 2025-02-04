// ProfileCard.js
import React from "react";
import styled from "styled-components";
import Left from "/public/assets/image/blog.jpg";
import Right from "/public/assets/image/blog2.jpg";
import Image from "@/components/atoms/image";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import SectionLayout from "@/components/atoms/sectionLayout";
import Text from "@/components/atoms/text";
import Intro from "./intro";
import Flex from "@/components/atoms/flex";

const Content = styled.div`
  overflow: hidden;

  @media (max-width: 900px) {
    margin-bottom: 5rem;
  }
`;

const ProfileCard = () => {
  const { isMobile } = useScreenResolution();

  return (
    <SectionLayout>
      <Intro />
      <Flex direction="column" justify="center" align="center" gap="0rem">
      <Text
        type="h2"
        text="Tracing The Roots"
        weight={600}
        styles={{
          fontSize: isMobile ? "5.5rem" : "10.5rem",
          textAlign: "center",
          margin: ".5rem auto .5rem",
          fontFamily: "Whyte Inktrap",
          width: isMobile ? "100%" : "630px",
          lineHeight: isMobile ? "4.5rem" : "8.5rem",
          textTransform: "uppercase",
        }}
      />

            <Text styles={{textAlign: "center", fontSize: isMobile ? "2rem" : "3rem", padding: '0', margin: '0 auto 4rem'}} type="span" text="Ayooluwa Adekoya" color="#766d6d" />
      </Flex>

      <p style={{color: "#766d6d"}}>A Publication of Fortifiers Nexus <br />
Published by Nectar Words Publishing Team <br />
House 3, Bolatito Mary Ayinde House, opposite Total filling station, Randa, Ogbomoso <br />
070 694 382 64, 070 325 712 08 <br />
fortifiersnexus@gmail.com</p> <br /><br />

<p style={{color: "#766d6d", marginBottom: "15rem", fontSize: isMobile ? "1.3rem" : "1.5rem"}}><em><strong>No material in this issue should be otherwise reproduced without prior permission from the publishers.</strong></em></p>


      <Content>
        <Image
          src={Left}
          alt="Left aligned content"
          height={isMobile ? 270 : 300}
          width={isMobile ? 326 : 300}
          styles={{
            borderRadius: "8px",
            float: isMobile ? "none" : "left",
            margin: isMobile ? "10px 0" : "0 15px 10px 0",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            // width: isMobile ? "100%" : "200px",
            borderBottomLeftRadius: isMobile ? "0px" : "8px",
            borderBottomRightRadius: isMobile ? "0px" : "8px",
          }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
          Four months ago, I was in a resort place to resolve some matters of the heart. 
          On getting there, my attention was drawn first to some tiny seeds spread over the 
          perimeter of the field of that area which enclosed a tree and others. Maroon-coloured 
          seeds, about the size of a tiger nut, occurred in clusters on a tree and also filled the 
          ground. I didn't notice at first that they were from the tree."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        I started tracing the source of the seeds and realized they were from a big fractured stem that branched off the root directly. This stem divided into two branches, each having tiny stems where the seeds clustered into many points. It occurred to me that the root itself had become multi-sub-roots. As I looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a smaller stem that gave off branches. They formed a plexus that didn't seem to end. I looked and looked until I traced the tiniest branch and stem on the topmost area, and on each, the seeds were numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        I had visited that area to pray. For the grace to be a better parent. Close to being a two-year-old-mum with two baby girls, I had been experiencing some unforeseen challenges in the journey. The previous day, I was facilitating a monthly teaching series online with unmarried ladies ages 20 years and above. This was a burden received from God lately which started in April 2024 through the faith-based NGO that my king & I have been privileged to be serving Him with. Èrí-ìfé (my king) also shares with males in the same category."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        Strangely, during the session, I found myself sharing from a book written by TD Jakes- 'Woman Thou Art Loosed.' We had never shared lessons from any book apart from the Bible. At the start of the session, I was the only one on the call for the first few minutes. I sensed a need to pray about what I was reading in the book. I started the session praying for myself, resolved to end the 1-hour meeting this way if nobody joined. I discovered that despite being the facilitator, I myself was in the need of prayer. At last, others joined. We learnt further from the book that many wounds we sustain and unwanted things we do as adults are related to spiritual ailments—root causes traceable to our past."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        While sharing, the Holy Spirit gave insight into the woman at the well who admitted that she had no husband. She could have claimed the illegal one to create a good impression to a stranger. When asked to go call him, she could have put her immorality behind a
facade, asking him to come out and act as her husband since he was under her roof at the time. But no. She admitted 'I have no husband'. I'm afraid this is where many people jitter to get to.
We ignore the Lord's help to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions. Jesus told her that she had spoken the truth. We must also speak the truth to ourselves."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="We should not cover up or use maladaptive coping mechanisms to excuse the deeds we adults do to violate children. These often result in a mirage rather than a miracle. It also hinders honest review that can lead to a change. Sometimes they stir rage in others including in the tender ones (rage in children especially in their formative years could be covert but shows up as antisocial behaviour sooner or later)."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        Many don't know why they transfer aggression to their children or write off a juvenile jewel as being delinquent whose uniqueness should rather be understood. We should instead be accountable, taking responsibility to see how the things we ourselves struggle with have a role in the unpleasant traits we convulse at in the little ones."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        Self-awareness submissions may include 'I suffered a low self-esteem because of the way I was raised or life difficulties I faced' 'I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder' 'I display poor communication skills and emotional regulation because of how I was wrongly spoken to or maltreated growing up' 'I need to take up a prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough' 'I need to operate more in liberty because I've allowed the past traumatic events to hold me back'. Maybe it is when we get here that Jesus can help us to fetch living waters from His fountain to our children and those in the city at large. And it begins by reckoning that in Him, we are whole and complete no matter what has to be dealt with. We walk by faith and not by sight.
        "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        This is not the same as making excuses for our character flaws. It is not an attempt to shun the efforts required to work on ourselves. If we are courageous enough to do these thorough investigations, we allow His light to take us on a diagnostic journey towards healing and self-discovery. God helped me to see that many things I was getting frustrated about in my parenting were not necessarily about the child but me.
Like the illustration, whatever fills the face of the earth as seeds-good or bad, the work begins by tracing the root. That root is me. 
        "
          styles={{ marginBottom: "15px" }}
        />

        <Image
          src={Right}
          alt="Right aligned content"
          height={isMobile ? 270 : 300}
          width={isMobile ? 326 : 300}
          styles={{
            borderRadius: "8px",
            float: isMobile ? "none" : "right",
            margin: isMobile ? "10px 0" : "0 0 10px 15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderBottomLeftRadius: isMobile ? "0px" : "8px",
            borderBottomRightRadius: isMobile ? "0px" : "8px",
          }}
        />

        <Text
          type="p"
          color="#222"
          size={18}
          text="
    As a medical practitioner I know about genes. For instance, our children don't physically look like the neighbour next door. In the same way, they won`t also acquire innate traits of that neighbour. You might have seen a child who has some semblance with a certain trait that used to be in their parents when the latter was younger but not how they look now anymore because those things may not be in the parents again.
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    For instance, a woman who used to be fair in complexion as a child but moved to a high temperature area and has been tanned can still give birth to a fair child. This shows that the gene of a light complexion is inherent and was also passed down to her. As adults, we picked up our behaviours today from both the inner and environmental factors. But these inner tendencies aren't a rule of thumb when it comes to children expressing them as behaviours. There's the environmental factor— which is the actual predictive factor.
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    What we consciously role model for them will determine what will be seen in them, it will determine if some traits will become dominant or recessive. We all learn by rolemodeling and how we were raised is responsible for many things that have formed us as adults. Even as christians, we renew our minds but something is still traceable to our roots. It may be belief systems, how we speak, act, respond, or interact with our physical or social world. Nonetheless, all things must be subject  to the obedience of the Word. This is why we should make work easy for our seeds as we strive to be intentional to communicate the life of the good tree, the tree of life. By doing so, they won't have many ruins to rebuild. We must be intentional to build children not with our mentality, convention, culture but with the word. This goes as far as instructions we give them, values we pass to them, and the lifestyle we model for them. It should not be partly Word and partly human concepts. Let everyone take note how he builds. If we build with hay and stubble, or with a mixture of wheat and chaff, if we build on sand and not solid rock, how will we be able to raise healthy children? 
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    For instance, you say to your child, 'When you get to school, don't give anybody your things'.
Yes. This is right and lawful. It is to ensure that child isn't misplacing their belongings. But that word when it becomes flesh might have done more harm than good. A judicious and prudent child but selfish and unaccommodating. If you say to your child 'You must come first position, I don't know how you will do it, the best pupil doesn't have two heads'. Again, it is lawful. This child, even your dear writer has been there. Turns out to be the best student but can do anything, envy or hate anyone, unhealthily compete with or supplant anyone, just to be that best student she was told to be. Can we have children shining yet pure as snow in their mindsets, behaviours, and lifestyle? Because all their springs are in the water of life  and nothing is made that they have been made into without the Word.
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    Children are as empty as plain slate at birth (Referred to as 'Tabula Rasa' in child development.)
Irrespective of the inner traits, what we sow into them is what will thrive. This means it is the environmental that determines if the inner tendencies will be stirred or stifled. Far above this is the reality that in Christ, negative flow not only of ancestral curses but even of ancestral traits and behaviours have been conquered. We must however be conscious to walk in this newness of life so that we aren't the ones transferring these tendencies to our children through our carelessness: ignorance, deception, hurts, unhealed internal wounds, egocentrism, etc. We should admit the need for restoration for ourselves and renewal of our mindsets from what society has wrongly stipulated as norms in parenting. 
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    During the teaching session that night, there was also a revelation into the life of the man at Bethesda who like the woman at the well admitted that he had no man to help him after 38 years of struggling to help himself to no avail. At that point, I knew the Lord was calling me to caution where I was struggling in my parenting. He was helping me to see that without His involvement no matter how hard I tried, I can not have good success. Good success in parenting is more than providing their needs. Protecting their destinies is also  a part. 
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    In receiving His help, the first person to be helped is me.
I had always known I needed to heal from childhood traumatic experiences CTE (including those that appear normal). I needed to rend and purge my heart if I would raise children as new wine. I had always known that beyond the journey of wholeness which I had gone through as a spinster, I would need another episode and even more frequently.
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   I am passionate about child psychology. I know and speak about it so well and seem to have a commendable grasp into the mind of children that I pass for a child advocate. But I was soon to find out that the good I desire to do, I am unable to. It is the opposite that I find myself doing mostly in dealing especially with my tweenager.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   However at the prayer resort area, while studying the trees, the Lord began to help me. Memories from my childhood opened up like the Atlantic Ocean.  I have been doing great at remembering childhood memories which I often tease Èrí-ìfe  about on being better than him. But this day was different. It was beyond mere cognitive reminders. A portion of my soul was reached by His scalpel and fresh blood flowed through my cerebral vessles as I recalled my freshest memory as a child.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   The Lord helped me to see certain things I had not placed significance on. Some of the crooked paths of my life that would have marred me as a grown up, how they began from as early as age 6 or 7 without the influence of anyone. Some other inappropriate manners and mannerisms. How the loss of my mother at 13 must have worsened certain things. Though I was a brilliant, smart, obedient, and lovable child, at the other end were subtle contentions of the enemy that began of their own accord and got worsened by environmental factors. Praise to God who made me triumph. But fragments which may seem unnoticeable in my life but not yet totally erased from my mind. From my mind, some gained wings and flew back into my life. Like the dove in the ark, they flew out again, and in, and out, the cycle was one that could have coloured this destiny. Alas but for mercy! Praise be to God for they are our forever!

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   At that moment, I started to develop a deeper heart of compassion for children than I have ever felt. It was beyond the mere ardency of a child health enthusiast, fervour of a child minister, or the passion of a child advocate. It was as if an angel stirred the water for me to jump into or I had just had a cleansing bath like Naaman and a baby-like flesh reappeared. The Lord Jesus Himself must have by His word cleft the deep places in my being, I began to cry. I began to cry.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   These tears must have been tied in a little sac within me for ages. A heaven-aided puncture that morning caused waters to ooze out from that sac. I was crying with compassion. For every child on the face of the earth. For the battles they fight that we don't know. For the things they can't communicate, decide, or influence because they are minors. For the mistakes adults can make with their innocent lives. For the cracks and broken pieces in them. For how we violate them in the process of disciplining them because we fail to understand them or have failed to heal ourselves.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   I concluded that any trait seen in anyone is traceable to a root. Seeds are a result of plantings and apples don't fall far from their trees. This means every issue I see a need to address in my child is not first about the child. It's first about me. Like the maroon seeds, there is a big tree producing them and it's right there in the same space.  In front of me. Me. You.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   No need to look far for aetiologies. They may be multifactorial but all hail from one thing. God said “Be fruitful and multiply, and fill the face of the earth, and subdue it, and have dominion”. One of the abilities of any living thing is to replicate itself in the image and likeness of what begat it. God requires us to do this with our children, modeling for them our image and likeness so that His image and likeness will be seen by them. But here's the question, is it God's image we are mirroring and not the corrupted one with unhealed or undealt issues in our lives?

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   If my child cannot find love and grace through me because of the way I correct her, then I should turn a new leaf. Physician, I should heal myself. If my parenting method is programming my child into a monster, then programmer, program yourself.
This is not to say children will not feel hurt or pain while we are raising them, of course they will. Even the Son learnt obedience by the things He suffered and so do we. No correction seems pleasant until the fruits mature. But damage, violation, abuse, injuring. This is what ought not to be. Until we are helped by God through a curative approach to parenting that begins with us, it may seem impossible.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   Another assumption is to gloss over these things and assume we would be better parents without intentional efforts through God. This is being conceited and it's even another extreme.
A lot of people take for granted the divine instructions and specific consecrations needed to raise their seeds as blameless blossoms, they disdain the stability that God's wisdom and knowledge should supply for their unique kids. Most parents just leave children to chance without knowing that the destinies of their children can be created as co-Creators with God. And this requires using nothing but the Word and going through only the path of God for that child. Not how you were raised. Not what you believe. Not what the media says. Not what the community suggests. But what God chooses for that child, even different from another child in the same family.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   When you choose this ancient path, society will raise an eyebrow, the world will attempt to resist you, loved ones will spew their harmless concerns. But you must choose this day, whom you shall serve, you and your children. To be on the world's side and have ordinary seeds or to be on the Lord's side and have extraordinary seeds. May we have more understanding on these things than the ancients even far before we reach those points. It`s good that many youths invest in various skills today to be more valuable but it is rare to see them putting the same energy and investment into becoming a better spouse and parent. I surmise that this is even more important than other ventures.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   That day as I allowed the encounter to simmer, the Holy Spirit went as far as pointing me to study the geographic area where one of my parents grew up. How exciting discoveries erupted. Part of this was a notable structure in this place built during the post-colonial era making it a revelational adventure. Interestingly, I had only visited the area a few times. I have also not been there in a long time and don’t currently live there. I was made to see that even though I am a citizen of Zion by the new birth, by  natural birth I am a native of this area. A man cannot change his divine citizenship except he deliberately denounces his faith neither can he change his earthly citizenship or nativity except by naturalization in the former or a change of identification with that tribe or state in the latter. But there`s what I can change. My productivity.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   The Meriam Webster Dictionary defined productivity as having the quality or power of producing especially in abundance. Another definition is yielding results, benefits, or profits. In essence, there is a way I live that people can trace me to a source because of the quality and quantity of fruits I`m producing. A common cliché in the education system is to ask people “You are a product of where?” They are expected to answer by mentioning the school they graduated from.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   Certain unwholesome behaviours have been linked to some hometowns. The problem is not about the hometown per se but how the people there behave and pass that behavioural psychology to their seeds which soon becomes a striking trait of natives of that place. While these facts hold, I can live in a way that I refuse to inherit and be traced to negative traits from where I hail. I can live in such a way that I can be traced to Zion, no longer to my place of origin because of certain behaviors.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   But if care is not taken, the seeming negative patterns in the geographical area of my origin can live with me forever. I can keep thinking the way people there think or talk the way people there talk. This means I will continue to raise my children the same way, and invariably, if they never even grew up in that country, they would stand a chance of being a product of that place by the fruits they produce and continue to replicate the same from age to age. Why not labour to transmit the blessings of Abraham in our lineages and trust God to help us to consciously appropriate  the crucifixion and resurrection experience of whatever traits are negative in that place since in Christ, it is finished. Amen.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   It was after this experience, before I left the area where this article was written that I noticed there were two or more other trees in that space, each having its seed, and within a foot distance, multiple seeds from each of them had filled their areas of proximity. One of them was a popular yellowish-green seed. God must indeed help every parent to see and understand that we need to completely trust Him to heal from subtle or visible childhood experiences and even current ones. These can determine the kinds of seeds we will raise. And to do this, it's not by might or power.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   We need Him to show us and strengthen us to raise blameless blossoms. To pull down the strongholds we have adopted for ages. This can only be done by God only after He has given insight that can make us willing to accept in the first place a need for help and obtain the power to truly be able to apply this divine transformation to raise transgenerational leaders.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   To critically look into what society has termed normal in raising children most of which are in actual sense harmful, contemptuous, and damaging to them. Condemning, demoralizing, hitting especially in provocation, yelling and shouting them down, punishing them wrongly or for every single mistakes (sometimes the things we punish them for are part of their normal process of growth), using age inappropriate methods, depriving them of essential needs because they have sinned. We ourselves must ask for the child of a heart. There are evil things adults do against children that show we are greater sinners and that they are more righteous than us based on our responses which should be queried. We all are found wanting but thank God, grace is ever abounding!  

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   Many of us parents have to admit and not just manage to say we are better than our mates who are not as productive with the quality of their family life as we. Or that we are at least doing better than those who raised us. Whereas, it’s the same curriculum we engage but a revised version customized for our own kids. This is the greatest deception. You feel 'Afterall I'm more submissive to my husband than what I saw growing up, 'At least, I love my wife better than dad loved mum’ or  'I connect to my child far better than what I faced as a child and she should even be grateful’ 'What of my other mates who aren't even as good as this in their own family.’ But finish the last word. Shake it like a mouth wash but don't swallow it— They are only a sign that you are still under the influence of those thought patterns. You have not really responded. Same architecture with upgraded appearance. You have yet more work to do. We will not rest until our righteousness is like a burning lamp because the path of the just shines brighter and brighter unto the perfect day. It is possible. Let's shake off the old dust and every fibre of its fabric. Let us ask for brand new garments.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   Like the man at Bethesda or the woman who admitted she had no husband, even though our parents, teachers, and other family and community adults gave us the best and we appreciate and respect them deeply for it. But we must be sincere that the best is yet to come. To be fortifiers of the next generation, we must be challengers of the status quo. People may even credit us in these areas for performing above average but God may quietly be calling us to see the need for His healing, renewal of mind, guidance into knowledge, and empowerment with His strength in order to raise blameless blossoms.

    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   Maybe the foxes combating our tender vines come not from the wild but the whys we have not asked, answered or changed in ourselves and society. Rebecca learnt to ask questions. But notice that she didn't ask why the babies were thus? She said 'Why am I thus? Not 'Why are they thus. It's time to take responsibility. Its time to ask questions. It's time to make a root cause analysis. It's time to agree that chaff only gets into the lives of our children when men (adults) sleep. When adults are not ready to unlearn and relearn. It's time to receive the reality of God's finished work over our past and current wounds before we start wounding these blameless blossoms. For every chaff we see, we agree that it is a watchman that slept. It is fine, let us go to the Lord! He will heal us and our seeds.

    "
          styles={{ marginBottom: "15px" }}
        />
      </Content>
    </SectionLayout>
  );
};

export default ProfileCard;
