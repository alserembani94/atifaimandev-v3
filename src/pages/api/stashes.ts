import { NextApiResponse, NextApiRequest } from 'next';
import { sql } from '@vercel/postgres';

export const sequences = ["the_meet", "the_path", "the_man", "the_loop", "the_end", "fin"] as const;
export type Sequence = typeof sequences[number];

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'GET') {
    const {
      phase,
      reply
    } = request.query;

    let phaseIndex = 0;
    
    const normalisedReply = typeof reply === "string" && reply.toLowerCase();

    if (normalisedReply === "i love react") {
      const res = await sql`SELECT url FROM Links WHERE id = 1;`;
      return response.status(418).json({ message: "Dragon is quite surprised with your response! He just grant you to the shortcut to the tea party. Find the teapot in the call.", link: res.rows[0].url });
    }
    const theSequence = sequences.map((sequence) => sequence);
    const isValidPhase = theSequence.includes(phase as Sequence);

    if (!isValidPhase || phase === "null") {
      phaseIndex = 1;
    }
    
    if (phase === "the_meet") {
      if (normalisedReply === "buah melaka") {
        phaseIndex = 2;
      } else {
        phaseIndex = 1;
      }
    }

    if (phase === "the_path") {
      if (['YmVsb24=', 'QmVsb24=', 'QkVMT04='].includes(reply as string)) {
        phaseIndex = 3;
      } else {
        phaseIndex = 2;
      }
    }

    if (phase === "the_man") {
      if (normalisedReply === "tun abdullah ahmad badawi") {
        phaseIndex = 4;
      } else {
        phaseIndex = 3;
      }
    }

    if (phase === "the_loop") {
      if (normalisedReply === "anjing") {
        phaseIndex = 5;
      } else {
        phaseIndex = 4;
      }
    }

    if (phase === "the_end") {
      if (normalisedReply === "1710201600") {
        phaseIndex = 6;
      } else {
        phaseIndex = 5;
      }
    }

    if (phase === "fin") {
      phaseIndex = 6;
    }

    if (phaseIndex === 1) {
      return response.status(200).json({ message: "Welcome, o' the adventurer! 'Tis year is the year, and I am gonna offer you the grand invitation to the tea party. Praise me, or hear me out!", pantun: ["Dua tiga naga berlari,", "Mana nak sama si naga Sungkai,", "Kalau tuan bijak bestari,", "Buah apa tidak bertangkai?"], phase: "the_meet" });
    }

    if (phaseIndex === 2) {
      return response.status(200).json({ message: "The dragon is pleased with your answer. The tea is brewing, but suddenly the dragon spouts random cryptic words.", pantun: ["QnVydW5nIG51cmkgYnVydW5nIGRhcmEKVGVyYmFuZyBrZSBzaXNpIHRhbWFuIGtheWFuZ2FuCkN1YmFsYWggdGVrYSB3YWhhaSBzYXVkYXJhClNlbWFraW4gZGlpc2kgc2VtYWtpbiByaW5nYW4="], phase: "the_path"});
    }

    if (phaseIndex === 3) {
      return response.status(200).json({ message: "The dragon surprised that you speak the word of dragons as well! The dragon show you a path to the tea party, but a wyvern suddenly stops you on your way. Then, the wyvern asks:", pantun: ["ناڬ ميره ناڬ ڤراوان", "ناڬ برأصل دري تانه بيما", "مودال انسان سبواه ڤمباڠونن", "دكاراڠ اوليه انسان كليم"], phase: "the_man" });
    }

    if (phaseIndex === 4) {
      return response.status(200).json({ message: "The wyvern accepts your answer. As you walk, the dragon presents to you a tablet containing the stars location, and there are some words saying:", pantun: ["Kumpulan haiwan dijadikan bintang,", "Dihampar bergelung dua belas kitaran,", "Meja bulatan duduk bertentang,", "Kekal setia sebagai haiwan."], phase: "the_loop" });
    }

    if (phaseIndex === 5) {
      return response.status(200).json({ message: "The tablet shines the whole room, and the dragon smiles. The dragon said that the last trial awaits for the tea.", pantun: ["Masa berarak hari ke hari,", "Termaktub sepanjang tiga enam lima,", "Tukaran epok dari sehari,", "Satu Ramadan di kalendar kita."], phase: "the_end" });
    }

    if (phaseIndex === 6) {
      const res = await sql`SELECT url FROM Links WHERE id = 1;`;
      return response.status(418).json({ message: "You have reached the tea party! The dragon is so contented, the adventure sit on the tea table to enjoy the tea time. Find the teapot in the call.", phase: "fin", link: res.rows[0].url });
    }

    return response.status(500).json({ message: "Dragon is confused with your words." });
  }
  else {
    return response.status(500).json({ message: "The dragon cannot comprehend your trials! The dragon banishes you to the depth of ravine!" });
  }
}