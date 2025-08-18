import { Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkGridItem } from '@/components/grid-item';
import Section from '@/components/section';

import thumbRice1 from '../../public/works/rice-1.png';
import thumbRice2 from '../../public/works/rice-2.png';
import thumbRice3 from '../../public/works/rice-3.png';
// import thumbSlack from '../../public/works/slack_clone.png';
// import thumbLeaveManagement from '../../public/works/leave_management.png';

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
      </Section>
    </>
  );
};

export default Works;
