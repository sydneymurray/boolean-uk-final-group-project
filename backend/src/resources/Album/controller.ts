import { Request, Response } from "express";
import dbClient from "../../utils/client";

export async function createOneAlbum(req: Request, res: Response) {
  const albumDetails = req.body;

  try {
    const newAlbum = await dbClient.album.create({
      data: albumDetails,
    });
    res.json({
      msg: "album successfully added to DB",
      data: newAlbum,
    });
  } catch (error) {
    res
      .status(401)
      .json({ msg: "You do not have permission to access this route" });
  }
}
