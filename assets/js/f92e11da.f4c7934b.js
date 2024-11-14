"use strict";(self.webpackChunkccl_docs=self.webpackChunkccl_docs||[]).push([[68],{4398:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(4848),a=n(8453);const i={sidebar_position:3},r="Sending Messages",o={id:"3-0-messages",title:"Sending Messages",description:"Once you\u2019ve configured your WhatsApp Business Account (WABA), you can start creating and sending message templates to engage with your users. This guide covers creating message templates using WhatsApp Manager and using ChitChatLabs to send messages.",source:"@site/docs/3-0-messages.md",sourceDirName:".",slug:"/3-0-messages",permalink:"/3-0-messages",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Onboarding Guide",permalink:"/onboarding"},next:{title:"Sending Messages via API",permalink:"/3-1-messages"}},l={},d=[{value:"Create a Message Template in WhatsApp Manager",id:"create-a-message-template-in-whatsapp-manager",level:2},{value:"Sending Messages to Your Users",id:"sending-messages-to-your-users",level:2},{value:"Step 1: Upload Your Contact List",id:"step-1-upload-your-contact-list",level:3},{value:"Step 2: Search and Select Contacts",id:"step-2-search-and-select-contacts",level:3},{value:"Step 3: Configure the Send Message Modal",id:"step-3-configure-the-send-message-modal",level:3},{value:"Example Message Body",id:"example-message-body",level:4},{value:"Step 4: Send the Message",id:"step-4-send-the-message",level:3},{value:"Monitoring Sent Messages",id:"monitoring-sent-messages",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"sending-messages",children:"Sending Messages"})}),"\n",(0,t.jsxs)(s.p,{children:["Once you\u2019ve configured your ",(0,t.jsx)(s.strong,{children:"WhatsApp Business Account (WABA)"}),", you can start creating and sending message templates to engage with your users. This guide covers creating message templates using ",(0,t.jsx)(s.strong,{children:"WhatsApp Manager"})," and using ",(0,t.jsx)(s.strong,{children:"ChitChatLabs"})," to send messages."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"create-a-message-template-in-whatsapp-manager",children:"Create a Message Template in WhatsApp Manager"}),"\n",(0,t.jsx)(s.p,{children:"To create a message template:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Visit ",(0,t.jsx)(s.a,{href:"https://business.facebook.com/latest/whatsapp_manager/message_templates",children:"WhatsApp Manager"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Choose the type of template you need: ",(0,t.jsx)(s.strong,{children:"Marketing"}),", ",(0,t.jsx)(s.strong,{children:"Utility"}),", or ",(0,t.jsx)(s.strong,{children:"Authentication"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Customize your template\u2019s components:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Header"}),": Can include text, an image, a document, or a video. Note that any media in the header is parameterized."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Body"}),": Use rich formatting like bold, italics, emojis, and parameters (e.g., ",(0,t.jsx)(s.code,{children:"{{1}}"}),", ",(0,t.jsx)(s.code,{children:"{{2}}"}),") to personalize messages and make them more engaging."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Footer"}),": This is a gray text section at the bottom of the message."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Buttons"}),": Add buttons for interactivity. You can also set dynamic suffixes for these buttons."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Once your template is ready, submit it for approval. Approved templates can then be used within ChitChatLabs to message your users."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"sending-messages-to-your-users",children:"Sending Messages to Your Users"}),"\n",(0,t.jsx)(s.p,{children:"With ChitChatLabs, you can send messages using your approved templates. To get started:"}),"\n",(0,t.jsx)(s.h3,{id:"step-1-upload-your-contact-list",children:"Step 1: Upload Your Contact List"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to the ",(0,t.jsx)(s.a,{href:"https://chitchatlabs.com/#/messages",children:"Messages page"})," on ChitChatLabs."]}),"\n",(0,t.jsxs)(s.li,{children:["Use the ",(0,t.jsx)(s.strong,{children:"Contacts"})," tab to manage your contacts.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'You can add contacts individually or upload a CSV file. Ensure that each contact has "name" and "mobile" fields (required), and include any other custom fields you need.'}),"\n",(0,t.jsx)(s.li,{children:"These additional fields can serve as parameters in your message templates or help filter contact records for specific targeting."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"step-2-search-and-select-contacts",children:"Step 2: Search and Select Contacts"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"After creating or uploading contacts, you can search by one or more filter values."}),"\n",(0,t.jsxs)(s.li,{children:["When you click ",(0,t.jsx)(s.strong,{children:"Send Message"}),":","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If a search has been performed, only the matching contact records will be used."}),"\n",(0,t.jsx)(s.li,{children:"If no search is performed, the message will be sent to all contacts in your list."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"step-3-configure-the-send-message-modal",children:"Step 3: Configure the Send Message Modal"}),"\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Send Message"})," modal, complete the following steps:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Fill out the required fields based on the on-screen instructions."}),"\n",(0,t.jsxs)(s.li,{children:["Add parameters as fixed values or use dynamic values from the contacts table by specifying the column name within double curly braces (e.g., ",(0,t.jsx)(s.code,{children:"{{name}}"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:["Optionally, add a ",(0,t.jsx)(s.strong,{children:"tag"})," to label this particular send, which is useful for tracking messages sent with the same template on different occasions."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"example-message-body",children:"Example Message Body"}),"\n",(0,t.jsx)(s.p,{children:"Here\u2019s a sample message payload that you might use:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "language": "en",\n  "file": {\n    "type": "image",\n    "link": "https://link"\n  },\n  "params": [\n    "{{name}}",\n    "{{color}}"\n  ],\n  "tag": "10-Nov-Push",\n  "buttons": [\n    "{{video_link}}"\n  ]\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"step-4-send-the-message",children:"Step 4: Send the Message"}),"\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Send"})," to initiate the message delivery. You\u2019ll receive confirmation that the message is being sent."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"monitoring-sent-messages",children:"Monitoring Sent Messages"}),"\n",(0,t.jsxs)(s.p,{children:["After sending, you can track message delivery and status in the ",(0,t.jsx)(s.strong,{children:"Messages"})," tab:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to the ",(0,t.jsx)(s.strong,{children:"Messages"})," tab."]}),"\n",(0,t.jsx)(s.li,{children:"Use the search options to filter sent messages by template, tag, status, and other parameters."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["This tab provides detailed statuses for each message, helping you monitor delivery success. If an error occurs, the ",(0,t.jsx)(s.strong,{children:"Messages"})," tab will display the specific error type and a link to the relevant Facebook documentation, allowing you to understand and resolve any issues effectively."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var t=n(6540);const a={},i=t.createContext(a);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);