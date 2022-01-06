import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class StorageResource {

  constructor(
    private afStorage: AngularFireStorage,
  ) {}

  async uploadUserProfilePic(uid: string, imageFile: any) {
    const path = `users/${uid}/profilePic`;
    await this.afStorage.upload(path, imageFile);
    return this.fetchUserProfilePicUrl(uid);
  }

  async fetchUserProfilePicUrl(uid: string) {
    return <Promise<string>> this.afStorage.ref(`users/${uid}/profilePic`).getDownloadURL().toPromise();
  }

  uploadUserFile(uid: string, type: 'reports' | 'pictures', file: File) {
    const unix = moment().unix();
    const path = `users/${uid}/${type}/${unix}`;
    const name = file.name ? file.name : type + '-' + Math.random().toString().slice(2)
    return this.afStorage.upload(path, file, {
      customMetadata: { name: `${name}` },
    });
  }

  async fetchUserFiles(uid: string, type: 'reports' | 'pictures') {
    const listResult = await this.afStorage.ref(`users/${uid}/${type}`).listAll().toPromise();
    return this.fetchAdditionalData(listResult);
  }

  private async fetchAdditionalData(listResult) {
    let files: FileData[] = [];
    for (let i = 0; i < listResult.items.length; i++) {
      let fileRef = listResult.items[i];
      const results = await Promise.all([fileRef.getMetadata(), fileRef.getDownloadURL()])
      let file = {
        Reference: fileRef,
        name: results[0].customMetadata.name,
        date: results[0].timeCreated,
        mimeType: results[0].contentType,
        url: results[1],
      };
      files.push(file);
    }
    return files.sort((a,b) => a.date > b.date ? -1 : 1);
  }
}

export interface FileData {
  // firebase.storage.Reference
  // will be used to delete using .Reference.delete()
  Reference: any;
  name: string;
  date: string;
  mimeType: string;
  url: string;
}
