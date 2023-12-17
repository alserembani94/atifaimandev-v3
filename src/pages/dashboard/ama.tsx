import Default from '@/components/layout/Default';
import { useLottie } from 'lottie-react';
import {
  NextPage,
} from 'next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as htmlToImage from 'html-to-image';
import { useRef, useState } from 'react';
import Modal from '@/components/Modal';
import { Question } from '@/types/question';

const AMA: NextPage = () => {
  const amaCardRef = useRef<HTMLDivElement>(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null as any);

  const getQuestions = async () => {
    const { data } = await axios.get('/api/questions');
    return data;
  }
  const query = useQuery({ queryKey: ['questions'], queryFn: getQuestions });
  const style = {
    height: 300,
  };

  const questions = query.isFetched ? query.data.questions.rows : [];

  const options = {
    animationData: require("@/animation/ask-me-anything.json"),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  const handleRead = async (questionItem: Question) => {
    try {
      await axios.put('/api/questions', {
        id: questionItem.id,
      })

      query.refetch();
    } catch (error) {
      toast("something went wrong, please try again later", {
        position: 'top-center',
        type: 'error',
      });
    }
  };

  const handleAnswer = (questionItem: Question) => {
    setSelectedQuestion(questionItem);
    handleRead(questionItem);
  };

  const saveHandler = async () => {
    const image = await htmlToImage.toPng(amaCardRef.current!);
    const link = document.createElement('a');
    link.download = 'ama.png';
    link.href = image;
    link.click();
  }

  const postHandle = () => {
    const twitterUrl = `https://twitter.com/intent/tweet`;
    window.open(twitterUrl, '_blank');
  };

  // Get the user's time zone offset in minutes
  const userTimeZoneOffset = new Date().getTimezoneOffset();

  // Calculate the user's time zone offset in milliseconds
  const userTimeZoneOffsetMs = userTimeZoneOffset * 60 * 1000;

  return (
    <Default title="The Home of atifaiman.dev">
      {View}
      <h1 className="text-center mb-4">AMA List</h1>
      <section className="flex flex-col gap-4">
        {
          questions.map((question: any) => {
            const postedDate = new Date(question.postedon);

            const adjustedDate = new Date(postedDate.getTime() - userTimeZoneOffsetMs);

            return (
              <div data-answered={question.status.toString()} className="bg-white data-[answered=true]:opacity-50 rounded-lg p-4 gap-4 flex flex-col md:flex-row items-center w-full" key={`question-${question.id}`}>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <div data-answered={question.status.toString()} className="w-6 h-2 rounded-full bg-slate-200 data-[answered=true]:bg-green-700" />
                    <p>{new Intl.DateTimeFormat('ms-MY', { year: "2-digit", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false, timeZoneName: "longOffset" }).format(adjustedDate)}</p>
                  </div>
                  <p>{question.question}</p>
                </div>
                <button className="flex flex-row gap-2 items-center px-8 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold" onClick={() => handleAnswer(question)}>
                  <span>Answer</span>
                </button>
              </div>
            )
          })
        }
      </section>
      <ToastContainer />

      {selectedQuestion &&
        <Modal onClose={() => setSelectedQuestion(null)}>
          <div className="flex flex-col items-center gap-4">
            <div ref={amaCardRef} className="flex flex-col rounded-2xl w-full overflow-hidden shadow-md text-2xl">
              <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <p className="font-bold text-center">Ask me Web Dev and Career</p>
              </div>
              <div className="p-8 w-full outline-none font-bold bg-white">
                <p className="text-center">{selectedQuestion.question}</p>
              </div>
            </div>
            <button className="mt-4 w-full px-8 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold" onClick={saveHandler}>Save</button>
            <button className="w-full px-8 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold" onClick={postHandle}>Post on 𝕏</button>
          </div>
        </Modal>
      }
    </Default>
  );
};

export default AMA;



// import React, { FC, ReactNode } from 'react';

// interface MyComponentProps<T> {
//   options: T[];
//   renderFunction: (option: T) => ReactNode;
//   defaultedSearch: T;
// }

// const MyComponent = <T,>({
//   options,
//   renderFunction,
//   defaultedSearch,
// }: MyComponentProps<T>): JSX.Element => {
//   // Your component logic here
//   return (
//     <div>
//       {/* Example usage of options and renderFunction */}
//       {options.map((option) => renderFunction(option))}
//       {/* Example usage of defaultedSearch */}
//       <div>{renderFunction(defaultedSearch)}</div>
//     </div>
//   );
// };

// const Parent = () => {
//   return (
//     <DateRender configuration={{ date: "2023-01-01", end_date: '2023-01-04' }} />
//     // <MyComponent options={['a', 'b', 'c']} renderFunction={(option) => <div>{option}</div>} defaultedSearch="a" />
//     // <MyComponent options={[1, 2, 3]} renderFunction={(option) => <div>{option}</div>} defaultedSearch={1} />
//   );
// }

// Example usage with strings
{/* <MyComponent options={['a', 'b', 'c']} renderFunction={(option) => <div>{option}</div>} defaultedSearch="a" /> */}

// Example usage with numbers
{/* <MyComponent options={[1, 2, 3]} renderFunction={(option) => <div>{option}</div>} defaultedSearch={1} /> */}