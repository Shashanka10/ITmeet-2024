import React from "react";
import { FaBars, FaX, FaMusic } from "react-icons/fa6";
import { FaBaseballBall } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { useState } from "react";
import { Client, Databases, ID, Storage } from "appwrite";
import { useEffect } from "react";



export default function FAQ() {

  const [open, setOpen] = useState(false);
  const [targetId, setTargetId] = useState(1);
  const [data, storeData] = useState([]);
  const [ImageSrc, setImageSrc] = useState("");


  /*
  //AppWrite documentation

  //For documents

  attributes:
  ->id - integer
  ->heading - string
  ->paragraph - string
  ->svg - string of svg element tag


  //For bucket
  file:
  ->with id, matching id of attributes.(1,2,3)

  */


  /*

  cloud project id  = 6708c82a00008f83e8e5
  document id = 6708c8b10001ec2fb25e
  collections id = 6708c8c1002b381ebfb4
  bucket id = 6708ddf7000a24a0820d
  */


  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<project id>');

  const databases = new Databases(client);
  const storage = new Storage(client);




  const list_document = async () => {
    try {
      const response = await databases.listDocuments(
        '<document id>',
        '<collections id>',

      );
      storeData(response.documents)

    } catch (error) {
      console.log("While requesting Data from database", error);
    }
  }

  const list_images = async (id) => {
    try {

      const response = await storage.getFileView('<bucket id>', id);
      setImageSrc(response.href);
    } catch (error) {
      console.log("While requesting Image from database", error);
    }
  }



  useEffect(() => {
    list_document();
  }, [])

  useEffect(() => {
    list_images(targetId)
  }, [targetId])


  const renderSvg = (svg) => {
    return (
      <div
        className="svg-icon text-white object-contain flex items-center justify-center "
        style={{
          width: '30px', height: '30px'
        }
        }
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    )
  }


  const handleClick = (e) => {
    e.preventDefault();
    let parent = e.target.closest(".parent_NodeElement");
    if (parent.id == targetId) {
      setOpen(!open);
    } else {
      setTargetId(parent.id);
      setOpen(true);
    }

  }



  const components = (id, heading, paragraph, svg) => (
    <div
      id={id}
      key={id}
      className={`
        w-auto h-auto px-4 py-7 rounded-lg border-[2.5px] border-[#369fff] hover:bg-[#369fff]  space-y-5
           ${id == targetId && open ? "bg-[#369fff]" : "bg-transparent"
        } parent_NodeElement`
      }
      onClick={

        (e) => handleClick(e)
      }
    >

      <div className="flex justify-start align-baseline items-center space-x-5 ">


        {
          <div className="p-2 bg-[#369fff] rounded-full">
            {renderSvg(svg)}
          </div>
        }

        <h1 className="font-medium text-2xl">{heading}</h1>
      </div>

      {/* text */}
      {
        id == targetId && open
          ?
          <div
          >
            <p>
              {paragraph}
            </p>
          </div>
          :
          ""
      }

    </div>
  )


  return (
    <div className="w-full h-full  bg-black  text-white p-16 cursor-default">

      <div className="flex justify-center items-center font-bold text-3xl ">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f]">What Else Can You Expect at IT Meet?</h1>
      </div>

      <div className="flex justify-center items-center ">
        {/*Left side */}
        <div className="h-full w-4/6 ">
          <div className="flex-col space-y-9 justify-end items-center pl-20">
            {
              data.map(
                ({ heading, paragraph, id, svg }) =>
                  components(id, heading, paragraph, svg)
              )
            }
          </div>
        </div>

        {/*right side */}
        <div className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden p-10">
          <div className="h-[30rem] w-[22rem] rounded-md shadow-[-10px_10px_#369fff]">
            <img
              src={ImageSrc}
              alt="image"
              className="object-cover h-full w-full "
            />
          </div>
        </div>
      </div >

    </div>


  );
}
