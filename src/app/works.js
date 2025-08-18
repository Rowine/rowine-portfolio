import { Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkGridItem } from '@/components/grid-item';
import Section from '@/components/section';

import thumbRice1 from '../../public/works/rice-1.png';
import thumbRice2 from '../../public/works/rice-2.png';
import thumbRice3 from '../../public/works/rice-3.png';
import thumbInternship1 from '../../public/works/intern-1.png';
import thumbInternship2 from '../../public/works/intern-2.png';
import thumbInternship3 from '../../public/works/intern-3.png';

const Works = () => {
  return (
    <>
      <Heading as="h3" variant="section-title">
        Works
      </Heading>
      <Section>
        <SimpleGrid>
          <WorkGridItem
            href="https://yolov8-web-app.vercel.app"
            githubHref="https://github.com/Rowine/rice-disease-detection"
            title="Rice Pest & Disease Detection"
            thumbnails={[thumbRice1, thumbRice2, thumbRice3]}
            isDown={false}
          >
            A YOLOv8-based rice pest and disease detection system made using
            React.js, TensorFlow.js, and Firebase.
          </WorkGridItem>
        </SimpleGrid>

        <SimpleGrid>
          <WorkGridItem
            href="https://internship-tracker-pi.vercel.app"
            githubHref="https://github.com/Rowine/internship-tracker"
            title="Internship Tracker"
            thumbnails={[thumbInternship1, thumbInternship2, thumbInternship3]}
            isDown={false}
          >
            A web application for interns to document their internship experience
            and track their progress. Made using Next.js, Shadcn UI, and
            Supabase.
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </>
  );
};

export default Works;
