import { NextApiRequest, NextApiResponse } from "next";
import webPush, { RequestOptions } from "web-push";

interface ExtendsRequestOptions extends RequestOptions {
  proxyUrl: string | undefined;
  proxyPort: string | undefined;
  headers: {
    Host: string;
  };
}

webPush.setVapidDetails(
  `mailto:${process.env.WEB_PUSH_EMAIL}`,
  `${process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY}`,
  `${process.env.WEB_PUSH_PRIVATE_KEY}`
);

const Notification = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const { subscription, message, title } = req.body;

    const proxyOptions: ExtendsRequestOptions = {
      proxyUrl: process.env.NEXT_PUBLIC_PROXY_IP,
      proxyPort: process.env.NEXT_PUBLIC_PROXY_PORT,
      headers: {
        Host: "fcm.googleapis.com",
      },
    };

    webPush
      .sendNotification(
        subscription,
        JSON.stringify({
          title: title,
          message: message,
        }),
        proxyOptions
      )
      .then((response: webPush.SendResult) => {
        res.writeHead(response.statusCode, response.headers).end(response.body);
        console.log("Notify successfully!");
      })
      .catch((err: any) => {
        if ("statusCode" in err) {
          res.writeHead(err.statusCode, err.headers).end(err.body);
        } else {
          console.error(err);
          res.statusCode = 500;
          res.end();
        }
      });
  } else {
    res.statusCode = 405;
    res.end();
  }
};

export default Notification;
