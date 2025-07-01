# ðŸš€ IssueBadge GitHub Action

Send a digital badge or certificate to your contributors automatically using [IssueBadge](https://issuebadge.com), right from your GitHub Actions workflow.

## ðŸ”§ Inputs

| Name      | Description                        | Required |
|-----------|------------------------------------|----------|
| `api_key` | Your IssueBadge API key            | âœ… Yes    |
| `badge_id`| ID of the badge you want to send   | âœ… Yes    |
| `name`    | Recipient's name                   | âœ… Yes    |
| `email`   | Recipient's email address          | âœ… Yes    |

---

## âœ… Example Usage

```yaml
name: Send Badge on PR Merge

on:
  pull_request:
    types: [closed]

jobs:
  issuebadge:
    runs-on: ubuntu-latest
    if: github.event.pull_request.merged == true
    steps:
      - name: Send Badge
        uses: yourusername/issuebadge-github-action@main
        with:
          api_key: ${{ secrets.ISSUEBADGE_KEY }}
          badge_id: "W238GD8PK"
          name: "John Doe"
          email: "john@example.com"
```

---

## ðŸ”’ Authentication

Store your API key in your GitHub repository **Secrets**:

1. Go to your GitHub repo â†’ **Settings** â†’ **Secrets and variables** â†’ **Actions**
2. Click **New repository secret**
3. Name: `ISSUEBADGE_KEY`, Value: Your IssueBadge API key

---

## ðŸ“¬ About IssueBadge

[IssueBadge](https://issuebadge.com) lets you reward contributors with branded digital badges and certificates. Perfect for open-source teams, hackathons, internal DevRel, and more.

---

## ðŸ›  Setup

This GitHub Action is powered by:
- `node-fetch`
- `@actions/core`
- `uuid`

Build or test locally with:

```bash
npm install
node index.js
```

---

## ðŸ“ƒ License

MIT