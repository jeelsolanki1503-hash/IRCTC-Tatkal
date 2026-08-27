# TatkalFair prototype

Static, independent hackathon prototype for a fairer Tatkal journey. No real IRCTC, identity, or payment system is connected.

Run locally from this `Code` directory (do not open using `file://`):

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/#/home`.

The complete demo flow is: search → choose train → request token → passenger details → payment → select a simulated outcome. The status page offers confirmed, payment-declined, and bank-confirming recovery states. Progress is stored in `localStorage` so refresh resumes the current journey.
