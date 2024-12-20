"use client";

import SectionLayout from "@/components/atoms/sectionLayout";
import Flex from "@/components/atoms/flex";
import Image from "@/components/atoms/image";
// import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import styled from "styled-components";
import TreeImg from "../../../../../public/assets/image/articles/tree.jpg";
import { useScreenResolution } from "@/lib/extentions/hook/useScreenResolution";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 80vh;
  max-height: 70rem;
  // padding: 0 7%;

  // position: relative;
  // top: 10.3rem;
  padding-top: 5vh;

  // padding: 10rem 12rem;

  z-index: 1000;

  @media (max-width: 900px) {
    overflow: hidden;
    padding: 0rem;
    height: 100%;
    max-height: 100%;
    margin-top: -1rem;
  }
`;

export const ArticleComponent = () => {
  const { isMobile } = useScreenResolution();
  return (
    <HomePageWrapper>
      <SectionLayout
        // height="100%"
        // margin="0px"
        data-aos="fade-up"
        // padding={isMobile ? "0" : "11px"}
      >
       
         <Text
              type="h1"
              text="Tracing the Root"
              weight={700}
              size={isMobile ? "3.2rem" : "5.052rem"}
              styles={{
                lineHeight: isMobile ? "2.56rem" : "6.06rem",
                fontFamily: "Whyte Inktrap",
                // width: isMobile ? "35.8rem" : "53.7rem",
              }}
            />
        <Flex
          gap={isMobile ? "1rem" : "2rem"}
          justify="flex-start"
          direction={isMobile ? "column" : "row"}
        >
          <Image
            src={isMobile ? TreeImg : TreeImg}
            alt=""
            width={820}
            // styles={{ width: "50%", height: "80%" }}
          />
          <Flex direction="column" gap="-1rem">
            <Text
              styles={{ width: "100%", padding: "0px", margin: "0px" }}
              weight={400}
              color="#5d5d5d"
              type="p"
              text="Last month I was in an environment where the pictures attached to this post were taken. My attention was drawn first to some tiny seeds
spread over the perimeter of the field enclosing the tree and others. Maroon-coloured seeds, about the
size of a tiger nut, occurred in clusters on the tree and also filled the ground. I didn&#39;t notice at first that
they were from the tree."
            />
            <Text
              styles={{ width: "100%", padding: "0px", marginBottom: "0px" }}
              weight={400}
              color="#5d5d5d"
              type="p"
              text="Started tracing the source of the seeds and realized they were from a big fractured stem that branched
off the root directly. This stem was divided into two branches, each having tiny stems where the seeds
clustered  into at many points. It occurred to me that the root itself had become multi-sub-roots. As I
looked from the bottom up, each of the roots had big stems, all giving off branches that, in turn, had a
smaller stem that gave off branches. All formed a plexus that didn&#39;t seem to end. I looked and looked
until I traced the tiniest branches and stems on the topmost area, and on each of them, the seeds were
numerous in clusters throughout their lengths. Bewildered, I began to muse on this discovery, knowing
there must be an inspiration to glean."
            />
          </Flex>
        </Flex>
       
        <Text
          styles={{ width: "100%", padding: "0px" }}
          weight={400}
          color="#5d5d5d"
          type="p"
          text="I had visited that area to pray. My focus was on the grace to become a better parent. Close to being a
two-year-old mum with two baby girls, I had been experiencing some unforeseen challenges in the
journey. The previous day,  I was facilitating a monthly teaching series online with unmarried ladies ages
18-20 and above. This was a burden received from God lately which started in May this year through the
faith-based NGO hubby &amp; I are privileged to be serving Him with. Èrí-ìfé also shares with males in the
same category."
        />
        <Text
          styles={{ width: "100%", padding: "0px" }}
          weight={400}
          color="#5d5d5d"
          type="p"
          text="Strangely, during the session, I found myself sharing from TD Jakes&#39; book (I was skimming through it
days earlier), &#39;Woman Thou Art Loosed.&#39; We had never shared any book apart from the Bible. In the
beginning, being the only one on the call for some minutes, I sensed a need to pray for myself on the
things I was reading in the book. I started the session praying for myself, resolved to end the 1-hour
meeting this way if nobody joined. I discovered that though facilitating, even I was in the need of prayer.
When others joined, we learnt from the book that many wounds we sustain and unwanted things we do
have spiritual ailments, root causes traceable to our past."
        />
        <Text
          styles={{ width: "100%", padding: "0px" }}
          weight={400}
          color="#5d5d5d"
          type="p"
          text="While sharing, the Holy Spirit gave insight into the woman who admitted that she had no husband. Why
couldn&#39;t she have claimed the illegal one for herself while talking to a stranger to at least appear as a
responsible woman? When asked to go call him, she could have made a facade, asking him to come out
and act as her husband since he was under her roof at the time. But no. She admitted &#39;I have no
husband&#39;. I&#39;m afraid this is where many people loathe to get to. We ignore the Lord&#39;s help to analyze the
situation and evaluate ourselves to reach a conclusion that can proffer solutions."
        />
        <Text
          styles={{ width: "100%", padding: "0px" }}
          weight={400}
          color="#5d5d5d"
          type="p"
          text="We should not cover up or use maladaptive coping mechanisms. These often result in a mirage or stir
rage in others as opposed to the miracle we seek. Sadly, many don&#39;t know why they transfer aggression
to their children or write off a child whose uniqueness should be understood instead. We should have
arrived at points such as &#39;I suffered a low self-esteem because of the way I was raised or battles I fought&#39;
&#39;I struggle with indiscipline and negativity in an attempt to respond to an acute stress disorder&#39; &#39;I display
poor communication skills because of how I was wrongly spoken to growing up&#39; &#39;I need to take up a
prosperity/excellence mentality and lay down that of poverty/mediocrity that I had always thought was good enough&#39; &#39;I need to operate more in liberty because I&#39;ve allowed the past traumatic events to hold
me back&#39;."
        />
        <Text
          styles={{ width: "100%", padding: "0px" }}
          weight={400}
          color="#5d5d5d"
          type="p"
          text="This is not the same as making excuses for the flaws in our lives. It is not an attempt to shun the efforts
required to work on ourselves. It is only on arrival at this investigation suite as we allow His light to take
us on a diagnostic journey that the intentional efforts can be effective. God was helping me to see that
many things I was getting frustrated about in my parenting were not necessarily about the child but me.
Like the illustration, whatever fills the face of the earth as seeds that I&#39;m not pleased with, the work
begins by tracing the root. In doing this, bearing in mind that I myself am a product of interconnected
past generations speaking on a physical note."
        />
        <Text
          styles={{ width: "100%", padding: "0px" }}
          weight={400}
          color="#5d5d5d"
          type="p"
          text="Christ has delivered us from ancestral curses through victory in His finished works. But not only are we
delivered from the seeming &#39;demonic&#39; ancestral flow but also ancestral traits and behavioural patterns.
As a medical practitioner I understand the role of genes. The same way our children don&#39;t physically look
like the next neighbour&#39;s children, they will also have innate tendencies to look like us in
behaviours(possibly maybe even look like our past or hereditary traits). You must have seen a newborn
look the way their parents used to look when they were younger but not how they look now because
those things may not be there again. For instance, a woman who used to be fair in complexion as a child
but later moved to a high temperature area and has been tanned can still give birth to a fair child. This
shows that the gene is in the woman not on the outside and don&#39;t forget the gene to be fair was also
passed down to her. But these inner tendencies aren&#39;t the main thing, there&#39;s the environmental factor
which is the main."
        />
        <Text
          styles={{ width: "100%", padding: "0px" }}
          weight={400}
          color="#5d5d5d"
          type="p"
          text="What we consciously role model for them will determine what will be seen, it will determine if some
traits will become dominant or recessive. The reason for this is that children are as empty as plain slate
at birth (Tabula Rasa). Irrespective of the inner genetic traits, what we sow into them is what will thrive.
In fact, we know that in Christ, negative flow of even ancestral traits and behaviours have been
conquered. We must however be conscious of waking in the newness of life so that we aren&#39;t the ones
transferring these tendencies to them through our carelessness."
        />
      </SectionLayout>
    </HomePageWrapper>
  );
};
