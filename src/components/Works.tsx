import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Works } from "@/utils/types";
import { AiOutlineGithub } from 'react-icons/ai'
import { clickURL } from "@/utils/functions";

export const WorkList: React.FC<{ works: Works[]}> = ({works}) => {
  return (
    <>
      <div className='gap-2 grid grid-cols-2 sm:grid-cols-3'>
        {works.map((x, i) => (
          <Card className="max-w-[400px]" key={i} isPressable onPress={() => clickURL(x.url)}>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-bold text-lg">{x.title}</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>{x.description}</p>
          </CardBody>
          <Divider/>
          <CardFooter className="inline-flex">
              <div className="text-blue-500">Click this card to visit source code</div>
              <AiOutlineGithub className='min-w-[20px] text-xl ml-[1.5px] mt-[0.5px] text-blue-500'/>
          </CardFooter>
        </Card>
        ))}
      </div>
    </>
  );
}
