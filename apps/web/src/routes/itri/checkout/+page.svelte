
<script lang="ts">
	import { onMount } from "svelte"
	import { env } from "$env/dynamic/public"
	import { initializePaddle } from "@paddle/paddle-js"
	import { goto } from "$app/navigation"

    const { data } = $props()
    const { session } = $derived(data)

    onMount(async () => {
            const paddleCheckout = await initializePaddle({
            token: env.PUBLIC_PADDLE_CLIENT_KEY,
            eventCallback: async (event) => {
                if (event.name === "checkout.completed") {
                    await fetch(
                        "/itri/checkout/handle",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                cust_id: event.data?.customer.id,
                                metadata: {
                                    transaction: event.data?.transaction_id,
                                    method: event.data?.payment.method_details
                                }
                            })
                        }
                    ).then((res) => {
                        if (res.ok && res.status >= 200 && res.status < 400) {
                            goto("/itri/dashboard")
                        }
                    })
                }
            }
        })

        if (paddleCheckout) {
            // Logically speaking the email should be alway non-NULL since this page needs a valid auth session
            paddleCheckout.Environment.set("sandbox")
            paddleCheckout.Checkout.open({
                customer: {
                    email: session?.user.email || ""
                },
                items: [
                    {
                        priceId: env.PUBLIC_PADDLE_ITEM_ID,
                        quantity: 1
                    }
                ],
                settings: {
                    allowLogout: false,
                    variant: "multi-page",
                    allowedPaymentMethods: [
                        "apple_pay",
                        "google_pay",
                        "samsung_pay",
                        "card"
                    ],
                    frameTarget: "paddle-box",
                    displayMode: "inline"
                },
                customData: {
                    email: session?.user.email || ""
                }
            })
        }
    })
</script>

<div class="mx-30">
    <!-- <div>
        <h1 class="text-2xl mb-2">
            <span class="text-slate-600 block text-base">Azul Flawn,</span>
            <span class="font-semibold">{session?.user.user_metadata.name}</span>
        </h1>
    </div> -->
    <div class="relative mx-30 overflow-scroll flex-1 paddle-box min-h-128 **:absolute!">
    </div>
</div>

