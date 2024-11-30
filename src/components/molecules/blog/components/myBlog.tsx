// ProfileCard.js
import React from "react";
import styled from "styled-components";
import Left from "/public/assets/image/blog.jpg";
import Right from "/public/assets/image/blog2.jpg";
import Image from "@/components/atoms/image";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";
import SectionLayout from "@/components/atoms/sectionLayout";
import Text from "@/components/atoms/text";

const Content = styled.div`
  overflow: hidden; 
  
  @media (max-width: 900px){
  margin-bottom: 5rem;
  }
`;

const ProfileCard = () => {
  const { isMobile } = useScreenResolution();

  return (
    <SectionLayout>
      <Text
        type="h2"
        text="Tracing The Root"
        weight={600}
        styles={{
          fontSize: isMobile ? "3.5rem" :  "2.5rem",
          textAlign: "center",
          margin: ".5rem auto 3.5rem",
          fontFamily: "Whyte Inktrap",
        }}
      />
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
            width: isMobile ? "100%" : "200px",
            borderBottomLeftRadius: isMobile ? "0px" : "8px",
            borderBottomRightRadius: isMobile ? "0px" : "8px",
          }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        Last month I was in an environment where the pictures attached to this post were taken. 
        My attention was drawn first to some tiny seeds spread over the perimeter of the field
        enclosing the tree and others. Maroon-coloured seeds, about the size of a tiger nut, 
        occurred in clusters on the tree and also filled the ground."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        I didn&#39;t notice at first that they were from the tree. Started tracing the source 
        of the seeds and realized they were from a big fractured stem that branched off the 
        root directly. This stem was divided into two branches, each having tiny stems 
        where the seeds clustered into at many points."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        It occurred to me that the root itself had become multi-sub-roots. As I looked from the 
        bottom up, each of the roots had big stems, all giving off branches that, in turn, had a 
        smaller stem that gave off branches."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        All formed a plexus that didn&#39;t seem to end. I looked and looked until I 
        traced the tiniest branches and stems on the topmost area, and on each of them, 
        the seeds were numerous in clusters throughout their lengths."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        Bewildered, I began to muse on this discovery, knowing there must be an inspiration to glean.
      I had visited that area to pray. My focus was on the grace to become a better parent. 
      Close to being a two-year-old mum with two baby girls, I had been experiencing some 
      unforeseen challenges in the journey. The previous day,  I was facilitating a monthly 
      teaching series online with unmarried ladies ages 18-20 and above."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        This was a burden received from God lately which started in May this year through 
        the faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also 
        shares with males in the same category. Strangely, during the session, I found myself 
        sharing from TD Jakes&#39; book (I was skimming through it days earlier), 
        &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        In the beginning, being the only one on the call for some minutes, I sensed a need to pray for 
        myself on the things I was reading in the book. I started the session praying for myself, 
        resolved to end the 1-hour meeting this way if nobody joined. I discovered that though 
        facilitating, even I was in the need of prayer. When others joined, we learnt from the book 
        that many wounds we sustain and unwanted things we do have spiritual ailments, 
        root causes traceable to our past."
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        While sharing, the Holy Spirit gave insight into the woman who admitted that she had 
        no husband. Why couldn&#39;t she have claimed the illegal one for herself while 
        talking to a stranger to at least appear as a responsible woman? When asked to go 
        call him, she could have made a facade, asking him to come out and act as her husband 
        since he was under her roof at the time. But no. She admitted &#39;I have no husband&#39;. 
        "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
        I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help 
        to analyze the situation and evaluate ourselves to reach a conclusion that can proffer solutions.
      We should not cover up or use maladaptive coping mechanisms. 
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
            width: isMobile ? "100%" : "200px",
            borderBottomLeftRadius: isMobile ? "0px" : "8px",
            borderBottomRightRadius: isMobile ? "0px" : "8px",
          }}
        />

        <Text
          type="p"
          color="#222"
          size={18}
          text="
    These often result in a mirage or stir rage in others as opposed to the miracle we seek. 
    Sadly, many don&#39;t know why they transfer aggression to their children or write off a 
    child whose uniqueness should be understood instead. We should have arrived at points such 
    as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39;.
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    I struggle with indiscipline and negativity in an attempt to respond to an acute stress 
    disorder&#39; &#39;I display poor communication skills because of how I was wrongly 
    spoken to growing up&#39; &#39;I need to take up a prosperity/excellence mentality 
    and lay down that of poverty/mediocrity that I had always thought was good enough&#39;.
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    I need to operate more in liberty because I&#39;ve allowed the past traumatic 
    events to hold me back&#39;. This is not the same as making excuses for the flaws in our lives. 
    It is not an attempt to shun the efforts required to work on ourselves. It is only on arrival 
    at this investigation suite as we allow His light to take us on a diagnostic journey that 
    the intentional efforts can be effective. God was helping me to see that many things I 
    was getting frustrated about in my parenting were not necessarily about the child but me. 
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not 
    pleased with, the work begins by tracing the root. In doing this, bearing in mind that 
    I myself am a product of interconnected past generations speaking on a physical note.
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    Christ has delivered us from ancestral curses through victory in His finished works. 
      But not only are we delivered from the seeming &#39;demonic&#39; ancestral flow but 
      also ancestral traits and behavioural patterns. As a medical practitioner I understand 
      the role of genes. The same way our children don&#39;t physically look like the next 
      neighbour&#39;s children, they will also have innate tendencies to look like us in 
      behaviours(possibly maybe even look like our past or hereditary traits). 
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    You must have seen a newborn look the way their parents used to look when 
    they were younger but not how they look now because those things may not 
    be there again. For instance, a woman who used to be fair in complexion as a 
    child but later moved to a high temperature area and has been tanned can still 
    give birth to a fair child. This shows that the gene is in the woman not on the 
    outside and don&#39;t forget the gene to be fair was also passed down to her. 
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
    But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental 
    factor which is the main. What we consciously role model for them will determine 
    what will be seen, it will determine if some traits will become dominant or recessive. 
    The reason for this is that children are as empty as plain slate at birth (Tabula Rasa). 
     
    "
          styles={{ marginBottom: "15px" }}
        />
        <Text
          type="p"
          color="#222"
          size={18}
          text="
   Irrespective of the inner genetic traits, what we sow into them is what will thrive. 
   In fact, we know that in Christ, negative flow of even ancestral traits and behaviours 
   have been conquered. We must however be conscious of waking in the newness of life so 
   that we aren&#39;t the ones transferring these tendencies to them through our carelessness.

    "
          styles={{ marginBottom: "15px" }}
        />
      </Content>
    </SectionLayout>
  );
};

export default ProfileCard;
