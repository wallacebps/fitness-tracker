<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { VDatePicker } from "vuetify/lib/components/index.mjs";
const showDialogDate: Ref<boolean> = ref(false);
const selectedDate: Ref<any[] | undefined> = ref(undefined);
</script>

<template>
  <v-container>
    <v-row class="align-center justify-space-between mb-6">
      <v-btn @click="showDialogDate = true">
        <span v-if="selectedDate">Change date</span>
        <span v-else>Select date</span>
      </v-btn>
      {{ selectedDate }}
      <v-dialog v-model="showDialogDate" center>
        <v-date-picker
          v-model="selectedDate"
          show-adjacent-months
          @click:cancel="showDialogDate = false"
          @click:save="showDialogDate = false"
          style="margin: 0 auto"
        ></v-date-picker>
      </v-dialog>
    </v-row>
  </v-container>
</template>
