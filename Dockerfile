FROM hayd/deno

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

COPY . .

EXPOSE 3000

CMD ["denon","start"]


