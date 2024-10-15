import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { databases, storage, EXPECT_BUCKET_ID, EXPECT_DATABASE_ID, EXPECT_COLLECTION_ID } from "@/config/appwrite.js";


export default function Faq_Expection() {

    const [open, setOpen] = useState(false);
    const [targetId, setTargetId] = useState(1);
    const [data, storeData] = useState([]);
    const [ImageSrc, setImageSrc] = useState("");
    const [size, setSize] = useState("");



    /*
    //AppWrite documentation
  
    //For documents
  
    attributes:
    ->id - integer
    ->heading - string
    ->paragraph - string
    ->svg - string of svg element tag (modify height and width of svg tag if necessary, 50px * 50px)
  
    //For bucket
    file:
    ->with id, matching id of attributes.(1,2,3)

  
    */

    const list_document = async () => {
        try {
            const response = await databases.listDocuments(
                `${EXPECT_DATABASE_ID}`,
                `${EXPECT_COLLECTION_ID}`,
            );
            storeData(response.documents)
        } catch (error) {
            console.log("While requesting Data from database", error);
        }
    }


    const list_images = async (id) => {
        try {
            const response = storage.getFileView(`${EXPECT_BUCKET_ID}`, id);
            setImageSrc(response.href);
        } catch (error) {
            console.log("While requesting Image from database", error);
        }
    }

    useEffect(() => {

        list_document();
        function handleResize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, [])

    useEffect(() => {
        list_images(targetId)
    }, [targetId])


    const image_component = () => {

        return (
            <div className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden p-10">
                <div className=" w-[22rem]  sm:h-[30rem]  rounded-md shadow-[-10px_10px_#369fff]" >
                    <img
                        src={ImageSrc}
                        alt="image"
                        className="object-cover h-full w-full "
                    />
                </div>
            </div>
        )
    }


    const renderSvg = (svg) => {
        return (
            <div
                className="svg-icon text-white object-contain flex items-center justify-center "
                style={{
                    width: '30px', height: '30px'
                }}
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
            key={id}>
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
                <div className="flex justify-start align-baseline items-center space-x-3 sm:space-x-5 ">
                    {
                        <div className="p-2 bg-[#369fff] rounded-full">
                            {renderSvg(svg)}
                        </div>
                    }
                    <h1 className="font-medium text-lg min-[350px]:text-xl  sm:text-2xl">{heading}</h1>
                </div>
                {/* text */}
                {
                    id == targetId && open
                        ?
                        <div>
                            <p>
                                {paragraph}
                            </p>
                        </div>
                        :
                        ""
                }
            </div>
            {open && id == targetId && size <= 768 ? image_component() : ""}
        </div >

    )

    return (
        <div className="w-full h-full  bg-black  text-white p-16 cursor-default">

            <div className="flex justify-center items-center font-bold text-xl sm:text-2xl md:text-3xl ">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f] pt-0 pb-5 sm:py-10 md:pb-5 ">What Else Can You Expect at IT Meet?</h1>
            </div>

            <div className="md:flex justify-center items-center ">
                {/*Left side */}
                <div className="h-full w-full min-[500px]:px-16  md:px-0 lg:px-20 overflow-scroll">
                    <div className="flex-col space-y-9 justify-center md:justify-end items-center md:pl-20">
                        {
                            data.map(
                                ({ heading, paragraph, id, svg }) =>
                                    components(id, heading, paragraph, svg)
                            )
                        }
                    </div>
                </div>

                {/*right side */}
                {
                    size > 768 ? image_component() : ""
                }
            </div >

        </div>


    );
}