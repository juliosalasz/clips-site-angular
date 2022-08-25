import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import Iclip from '../models/clip.model';

@Injectable({
  providedIn: 'root',
})
export class ClipService {
  public clipsCollection: AngularFirestoreCollection<Iclip>;

  constructor(private db: AngularFirestore) {
    this.clipsCollection = db.collection('clips');
  }

  async createClip(data: Iclip) {
    await this.clipsCollection.add(data);
  }
}
