import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const bookings = await prisma.booking.findMany({
    include: { property: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(bookings);
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const data = await req.json();
  const booking = await prisma.booking.create({
    data: {
      ...data,
      checkIn: new Date(data.checkIn),
      checkOut: new Date(data.checkOut),
    },
  });
  return NextResponse.json(booking);
}

export async function PATCH(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id, ...data } = await req.json();
  if (data.checkIn) data.checkIn = new Date(data.checkIn);
  if (data.checkOut) data.checkOut = new Date(data.checkOut);
  const booking = await prisma.booking.update({ where: { id }, data });
  return NextResponse.json(booking);
}

export async function DELETE(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { id } = await req.json();
  await prisma.booking.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
