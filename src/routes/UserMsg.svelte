<script lang="ts">
</script>

<div
	class="w-full border-b border-black/10 dark:border-gray-900/50
     text-gray-800 dark:text-gray-100 group dark:bg-gray-800"
>
	<div
		class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl 
        lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"
	>
		<div class="w-[30px] flex flex-col relative items-end">
			<div
				style="background-color:#f0c2f6;"
				class="bg-[#fffff] rounded-sm text-white flex justify-center 
                    items-center relative tracking-widest h-8 w-8 text-xs"
			>
				<img src="user.png" style="width: 27px;" />
			</div>
		</div>
		<div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
			<div class="flex flex-grow flex-col gap-3">
				<div
					class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"
					id="user-text"
				/>
			</div>
			<div
				class="text-gray-400 flex self-end lg:self-center 
                justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full 
                lg:right-0 lg:mt-0 lg:pl-2 visible"
			/>
		</div>
	</div>
</div>
