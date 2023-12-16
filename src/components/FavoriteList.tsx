import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { describe } from "node:test";
import { Favorite } from "@/utils/types";

export const FavoriteList: React.FC<{ favorites:Favorite[] }> = ({favorites}) => {
  return (
    <>
      <div className='gap-2 grid grid-cols-2 sm:grid-cols-3 m-0'>
        {favorites.map((x, i) => (
          <Card className="flex max-w-[400px] min-w-full items-center min-h-[150px]" key={i}>
            <CardHeader className="flex gap-3 ">
              <div className="flex flex-col">
                <p className="text-md font-bold text-lg">{x.title}</p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <p>{x.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
