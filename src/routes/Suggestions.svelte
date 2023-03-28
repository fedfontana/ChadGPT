<script>
	import Icon from "./Icon.svelte";
</script>

<div class="md:flex items-start text-center gap-3.5">
    <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
        <h2
            class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"
        >
            <Icon />
            Examples
        </h2>
        <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <button
                class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
                >"Explain how cats use quantum mechanics in hunting"</button
            >
            <button
                class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
                >"Got any creative ideas for a cat's 10th birthday celebration?"</button
            >
            <button
                class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"
                >"How do cats make HTTP requests using cat-script?"</button
            >
        </ul>
    </div>
    <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
        <h2
            class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"
        >
            <Icon />
            Capabilities
        </h2>
        <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                Remember where user buried all the treats
            </li>
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                Allow user to act with good cat-tention to detail
            </li>
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                Trained to decline walks and bath requests
            </li>
        </ul>
    </div>
    <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
        <h2
            class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"
        >
            <Icon />Limitations
        </h2>
        <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                May occasionally generate a toy mouse
            </li>
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                May occasionally produce furballs
            </li>
            <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                Limited Knowledge of world and cat videos after 2021
            </li>
        </ul>
    </div>
</div>