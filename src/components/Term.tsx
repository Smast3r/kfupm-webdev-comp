import { useContext, useEffect, useState } from "react";
import { TermsContext } from "../contexts/TermsContext";
import AddCourse from "./AddCourse";
import AddCourseButton from "./AddCourseButton";
import Course from "./Course";

type Props = {
  number: number;
  Courses: Course[];
};
type Course = {
  hours: number;
  withLab: boolean;
  name: string;
};
type Term = {
  termNumber: number;
  termCourses?: Course[];
};

const Term = (props: Props) => {
  const [visablity, setVisablity] = useState(false);
  const [courses, setCourses] = useState(props.Courses);
  const { terms, setTerms } = useContext(TermsContext); // i should use the term instade of the things
  const showModal = () => {
    setVisablity(true);
  };
  const termNumber = props.number;

  return (
    <>
      <div className="grid grid-cols-1 gap-2 align-middle max-h-max bg-zinc-900 rounded p-2 text-cyan-200 w-52">
        <div className="flex justify-center">
          <h1>{props.number}</h1>
        </div>

        <>
          {terms
            ?.filter((term) => term.termNumber == termNumber)[0]
            .termCourses?.map((course, index) => {
              <Course
                key={index}
                hours={course.hours}
                name={course.name}
                withLab={course.withLab}
              />;
            })}
        </>
        <button
          className="h-10 w-10 bg-cyan-100"
          onClick={() => {
            console.log(courses);
          }}
        ></button>
        <AddCourseButton showModal={showModal}>Add Course</AddCourseButton>
      </div>
      {visablity ? (
        <AddCourse
          setCourses={setCourses}
          setVisablity={setVisablity}
          termNumber={termNumber}
        />
      ) : null}
    </>
  );
};

export default Term;
