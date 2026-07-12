# Security checklist before public launch

1. Use a 32+ byte random `AUTH_SECRET` and rotate it safely.
2. Enforce HTTPS and secure cookies.
3. Add email verification, reset tokens, login throttling and CAPTCHA.
4. Add CSRF protection for sensitive mutations.
5. Add request rate limits and WAF rules.
6. Validate and virus-scan uploaded documents.
7. Encrypt sensitive verification documents at rest.
8. Maintain audit logs for admin and commercial actions.
9. Use least-privilege database credentials and automated backups.
10. Commission an independent security review before live payments.
