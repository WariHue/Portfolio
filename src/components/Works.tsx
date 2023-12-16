import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Works } from "@/utils/types";

export const WorkList: React.FC<{ works: Works[]}> = ({works}) => {
  return (
    <>
      <div className='gap-2 grid grid-cols-2 sm:grid-cols-3'>
        {works.map((x, i) => (
          <Card className="max-w-[400px]" key={i}>
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
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href= {x.url}
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
        ))}
      </div>
    </>
  );
}
