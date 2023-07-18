import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import ReturnBodyComponent from 'pages/createMeeting/components/ReturnBodyComponent';
import ReturnTitleComponent from 'pages/createMeeting/components/ReturnTitleComponent';
import styled from 'styled-components/macro';

import { funnelStep } from './data/meetingInfoData';
import { MeetingInfo } from './types/useFunnelInterface';

const initialMeetingInfo: MeetingInfo = {
  title: '',
  availableDates: [''],
  preferTimes: [
    {
      startTime: '',
      endTime: '',
    },
  ],
  place: '',
  placeDetail: '',
  duration: '',
  name: '',
  password: '',
  additionalInfo: '',
};

function CreateMeeting() {
  const [step, setStep] = useState(0);
  const [meetingInfo, setMeetingInfo] = useState(initialMeetingInfo);
  const currentStep = funnelStep[step];
  console.log(meetingInfo);
  return (
    <>
      <ViewTestingWrapper>
        <Header position={'createMeeting'} setStep={setStep} />

        <ReturnTitleComponent step={currentStep} />

        <ReturnBodyComponent
          currentStep={currentStep}
          meetingInfo={meetingInfo}
          setMeetingInfo={setMeetingInfo}
          setStep={setStep}
        />
      </ViewTestingWrapper>
    </>
  );
}

export default CreateMeeting;

const ViewTestingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
