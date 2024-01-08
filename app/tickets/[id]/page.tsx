import React from "react";
import prisma from "@/prisma/db";
import TicketDetail from "./TicketDetail";

interface Props {
  params: { id: string };
}

const ViewTicket = async ({ params }: Props) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className=" text-destructive">Ticket Not Found!</p>;
  }

  return <TicketDetail ticket={ticket} />;
};

export default ViewTicket;
